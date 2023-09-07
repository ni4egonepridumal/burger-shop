import React from 'react';
import styles from './oneBurgerFromCart.module.scss';
import { IBurger } from '../../types';
import { Button } from '../Button';
import { deleteBurgerFromCart } from '../../redux/slices/addBurgerToCartSlice';
import { useAppDispatch } from '../../redux/hooks';
import { setCountPlusBurger, setCountMinusBurger } from "../../redux/slices/addBurgerToCartSlice";


interface IOneBurgerFromCart {
    burger: IBurger,
    totalPrice: number[],
    setTotalPrice: (arg0: number[]) => void
}

export const OneBurgerFromCart = ({ burger, totalPrice, setTotalPrice }: IOneBurgerFromCart) => {
    console.log("totalPrice", totalPrice)
    const [burgerPrice, setBurgerPrice] = React.useState<number>(burger.price);
    const dispatch = useAppDispatch()
    const handlePlusClick = () => {
        // setBurgerPrice(burgerPrice + burger.price)
        dispatch(setCountPlusBurger(burger.id))
    }
    const handleMinusClick = () => {
        if (burgerPrice >= 1 && burger.count >= 2) {
            // setBurgerPrice(burger.price)
            dispatch(setCountMinusBurger(burger.id))
        } else {
            // setBurgerPrice(burgerPrice - burger.price)
            dispatch(setCountMinusBurger(burger.id))

        }
    }
    return (
        <div className={styles.position}>
            <img className={styles.image} src={`./burgerImg/${burger.image}`} />
            <div>
                <p style={{ textAlign: "center" }}>Количество</p>
                <div style={{ textAlign: "center" }}>
                    <span className={styles.button} onClick={handleMinusClick}>-</span>
                    {burger.count}
                    <span className={styles.button} onClick={handlePlusClick}>+</span>
                </div>
            </div>
            <div>
                Цена за шт <span>{burgerPrice} руб.</span>
            </div>

            <Button viev='primary' size="s" onClick={() => dispatch(deleteBurgerFromCart(burger.id))}>Удалить</Button>

        </div>
    );
};

