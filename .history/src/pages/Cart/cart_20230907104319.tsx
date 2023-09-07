import React from "react";
import { Link } from "react-router-dom";
import styles from "./cart.module.scss";
import { OneBurgerFromCart } from "../../components/OneBurgerFromCart";
import { IBurger } from "../../types";
import { useAppSelector } from "../../redux/hooks";
import { DataUser } from "../../components/DataUser";


export const CartPage = () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    const burgerFromLocalStorage = JSON.parse(localStorage.getItem("burger"));
    const { burgerToCart } = useAppSelector(state => state);
    const [flag, setFlag] = React.useState(false)
    // const totalPriceFromState = burgerToCart.reduce((accum, burger) => accum += burger.price * burger.count, 0)
    const totalPriceFromLocalStorage = burgerFromLocalStorage.reduce((accum: number, burger: IBurger) => accum += burger.price * burger.count, 0)
    return (
        <>
            {burgerFromLocalStorage.length > 0 ?
                <div className={styles.container}>
                    <div className={styles.cart_inner}>
                        <div>
                            {burgerToCart && burgerFromLocalStorage.map((burger: IBurger) => <OneBurgerFromCart key={burger.id} burger={burger} />)}
                        </div>
                        <div className={styles.fixed}>
                            <DataUser flag={flag} setFlag={setFlag} totalPrice={totalPriceFromLocalStorage && totalPriceFromLocalStorage} />
                        </div>
                    </div>
                    <div className={styles.totalPrice}>Общая стоимость заказа: <span>{totalPriceFromLocalStorage && totalPriceFromLocalStorage} руб</span></div>
                    {flag && <h1 style={{ textAlign: "center", marginTop: "50px" }}>Ваш заказ оформлен  <br /><span style={{ fontSize: '18px' }}>(он в консоле)</span><br />ОБРАТИТЕ ВНИМАНИЕ, ЧТО ЭТО НЕ НАСТОЯЩИЙ ИНТЕРНЕТ МАГАЗИН, ВАШ ЗАКАЗ НЕ БУДЕТ СОБРАН ;)</h1>}
                </div>
                :
                <div className={styles.container_epmpty}>
                    <div className={styles.position}>
                        <div className={styles.gif}></div>
                        <div className={styles.text_inner}>
                            <p>Ваша корзина пуста!</p>
                            <br />
                            <Link to="/"><p className={styles.text}>Добавить бургеры?</p></Link>
                        </div>
                    </div>
                </div>
            }

        </>
    );
};
