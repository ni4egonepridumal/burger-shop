import React from 'react';
import styles from './oneBurgerFromCart.module.scss';
import { IBurger } from '../../types';
import { Button } from '../Button';
import { deleteBurgerFromCart } from '../../redux/slices/addBurgerToCartSlice';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';

interface IOneBurgerFromCart {
    burger: IBurger,
    totalPrice: number[],
    setTotalPrice: (arg0: number) => void
}

export const OneBurgerFromCart = ({ burger, totalPrice, setTotalPrice }: IOneBurgerFromCart) => {
    console.log(totalPrice)
    const [burgerPrice, setBurgerPrice] = React.useState<number>(burger.price);
    const [burgerItem, setBurgerItem] = React.useState<number>(1);
    const [res, setRes] = React.useState<number>(0);


    const dispatch = useAppDispatch()
    const handlePlusClick = () => {
        setBurgerPrice(burgerPrice + burger.price)
        setBurgerItem(burgerItem + 1)
        setTotalPrice([...totalPrice, burgerPrice])
    }
    const handleMinusClick = () => {
        if (burgerPrice >= 1 && burgerItem <= 2) {
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
            <Button viev='primary' size="s" onClick={() => dispatch(deleteBurgerFromCart(burger.id))}>Удалить</Button>
        </div>
    );
};

