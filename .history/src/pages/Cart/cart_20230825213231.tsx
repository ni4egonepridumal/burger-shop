import { Link } from "react-router-dom";
import styles from "./cart.module.scss";
import { useAppSelector } from "../../redux/hooks";



export const CartPage = () => {
    const burgerInCart = useAppSelector(state => state);
    console.log(burgerInCart.burgetToCart);
    return (
        <div className={styles.container}>
            <div className={styles.position}>
                <div className={styles.gif}></div>
                <div className={styles.text_inner}>
                    <p>Ваша корзина пуста!</p>
                    <br />
                    <Link to="/"><p className={styles.text}>Добавить бургеры?</p></Link>
                </div>
            </div>


        </div>
    );
};
