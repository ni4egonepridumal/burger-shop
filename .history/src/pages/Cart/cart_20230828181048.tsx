import { Link } from "react-router-dom";
import styles from "./cart.module.scss";




export const CartPage = () => {
    //@ts-ignore
    const burgerFromLocalStorage = JSON.parse(localStorage.getItem("burger"));
    console.log(burgerFromLocalStorage)

    return (
        <>
            {burgerFromLocalStorage.length > 0 ? <div className={styles.container}>
                <div className={styles.position}>
                    <div className={styles.gif}></div>
                    <div className={styles.text_inner}>
                        <p>Ваша корзина пуста!</p>
                        <br />
                        <Link to="/"><p className={styles.text}>Добавить бургеры?</p></Link>
                    </div>
                </div>


            </div>
                : <div>Тут есть товар</div>
            }

        </>
    );
};
