import styles from './oneBurgerFromCart.module.scss';
import { IBurger } from '../../types';
import React from 'react';

interface IOneBurgerFromCart {
    burger: IBurger
}

export const OneBurgerFromCart = ({ burger }: IOneBurgerFromCart) => {
    const [burgerPrice, setBurgerPrice] = React.useState<number>(burger.price);
    return (
        <div className={styles.position}>
            <img className={styles.image} src={`./burgerImg/${burger.image}`} />
            <div>
                <p style={{ textAlign: "center" }}>Количество</p>
                <div style={{ textAlign: "center" }}><span className={styles.button}>-</span>2<span className={styles.button} onClick={() => setBurgerPrice(burger.price + burger.price)}>+</span></div>
            </div>
            <div>
                Цена за шт <span>{burger.price} руб.</span>
            </div>
        </div>
    );
};

