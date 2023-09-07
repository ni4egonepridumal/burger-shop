import { BurgerCart } from "../../components/BurgerCart";
import styles from "./home.module.scss"

export const HomePage = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.burger_head}>Выбери свой бургер</h1>

            <BurgerCart />

        </div>
    );
};

