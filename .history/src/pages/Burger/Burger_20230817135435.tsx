import { useAppSelector } from "../../redux/hooks";
import styles from "./burger.module.scss";


export const BurgerPage = () => {
    const choseBurger = useAppSelector(state => state.aboutBurger)
    return (
        <div className={styles.container}>
            {choseBurger.map(burger =>

                <div key={burger.id}>
                    <img src={`./burgerImg/${burger.image}`} />
                </div>

            )}
        </div>
    );
};

