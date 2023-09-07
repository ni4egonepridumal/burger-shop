import styles from './oneBurgerFromCart.module.scss';
import { IBurger } from '../../types';
import React from 'react';

interface IOneBurgerFromCart {
    burger: IBurger
}

export const OneBurgerFromCart = ({ burger }: IOneBurgerFromCart) => {
    const [burgerPrice, setBurgerPrice] = React.useState<number>(burger.price);
    const [burgerItem, setBurgerItem] = React.useState<number>(1);

    const handlePlusClick = () => {
        setBurgerPrice(burgerPrice + burger.price)
        setBurgerItem(burgerItem + 1)
    }
    const handleMinusClick = () => {
        if (burgerPrice === 0 && burgerItem === 1) {
            setBurgerPrice(burger.price)
            setBurgerItem(1)
        } else {
            setBurgerPrice(burgerPrice - burger.price)
            setBurgerItem(burgerItem - 1)
        }

    }
    return (
        <div className={styles.position}>
            <img className={styles.image} src={`./burgerImg/${burger.image}`} />
            <div>
                <p style={{ textAlign: "center" }}>Количество</p>
                <div style={{ textAlign: "center" }}><span className={styles.button} onClick={handleMinusClick}>-</span>{burgerItem}<span className={styles.button} onClick={handlePlusClick}>+</span></div>
            </div>
            <div>
                Цена за шт <span>{burgerPrice} руб.</span>
            </div>
        </div>
    );
};

