import styles from './oneBurgerFromCart.module.scss';
import { IBurger } from '../../types';

interface IOneBurgerFromCart {
    burger: IBurger
}

export const OneBurgerFromCart = ({ burger }: IOneBurgerFromCart) => {
    return (
        <div className={styles.position}>
            <img className={styles.image} src={`./burgerImg/${burger.image}`} />
            <div>
                <p>Количество</p>
                <div style={{ textAlign: "center" }}><span className={styles.button}>+</span>2<span>-</span></div>
            </div>
            <div>
                Цена <span>{burger.price} руб.</span>
            </div>
        </div>
    );
};

