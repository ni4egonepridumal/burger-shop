import { Link } from "react-router-dom";
import styles from "./cart.module.scss";
import { OneBurgerFromCart } from "../../components/oneBurgerFromCart";
import { IBurger } from "../../types";
import { useAppSelector } from "../../redux/hooks";




export const CartPage = () => {
    //@ts-ignore
    const burgerFromLocalStorage = JSON.parse(localStorage.getItem("burger"));
    const { burgerToCart } = useAppSelector(state => state);
    const totalPriceFromState = burgerToCart.reduce((burger, accum) => burger.price + accum, 0)
    console.log(totalPriceFromState)
    return (
        <>
            {burgerFromLocalStorage.length > 0 ?
                <div className={styles.container}>
                    <div>
                        {burgerToCart && burgerFromLocalStorage.map((burger: IBurger) => <OneBurgerFromCart key={burger.id} burger={burger} />)}
                    </div>
                    <div>Общая стоимость заказа: <span>600p</span></div>
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
