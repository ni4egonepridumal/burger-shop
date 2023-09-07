import { BurgerCart } from "../../components/BurgerCart";
import styles from "./home.module.scss"
import { useGetAllBurgerQuery } from "../../redux";

export const HomePage = () => {
    const {data} = useGetAllBurgerQuery();
    console.log(data)
    return (
        <div className={styles.container}>
            <h1 className={styles.burger_head}>Выбери свой бургер</h1>
            <div className={styles.burger_inner}>
            <BurgerCart />
            <BurgerCart />
            <BurgerCart />
            <BurgerCart />
            <BurgerCart />
            <BurgerCart />
            </div>
            
        </div>
    );
};

