import { Link } from "react-router-dom";
import styles from "./cart.module.scss";


export const CartPage = () => {
    return (
        <div className={styles.container}>
            <div>
                <div className={styles.gif}></div>
                <p>Ваша корзина пуста!</p>
                <br />
                <Link to="/"><p>Добавить бургеры?</p></Link>
            </div>


        </div>
    );
};
