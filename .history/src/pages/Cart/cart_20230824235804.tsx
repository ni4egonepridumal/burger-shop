import { Link } from "react-router-dom";
import styles from "./cart.module.scss";


export const CartPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.position}>
                <div className={styles.gif}></div>
                <div>
                    <p>Ваша корзина пуста!</p>
                    <br />
                    <Link to="/"><p>Добавить бургеры?</p></Link>
                </div>
            </div>


        </div>
    );
};
