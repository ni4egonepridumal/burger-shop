import { useAppSelector } from "../../redux/hooks";
import styles from "./burger.module.scss";


export const BurgerPage = () => {
    const choseBurger = useAppSelector(state => state.aboutBurger)
    console.log(choseBurger)
    return (
        <div className={styles.container}>
            {choseBurger.map(burger =>

                <div>
                    <img src={`./burgerImg/${burger.image}`} />
                </div>

            )}
        </div>
    );
};

