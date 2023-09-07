import { Button } from '../Button';
import { Popup } from '../Popup';
import styles from './BurgerItem.module.scss';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { moreAboutBurger } from '../../redux/slices/aboutBurgerSlices';
import { addBurgerToCart } from '../../redux/slices/addBurgerToCartSlice'
import React from 'react';
import { IBurger } from '../../types';


interface IBurgerCartProps {
    burgers: IBurger
}

export const BurgerItem: React.FC<IBurgerCartProps> = ({ burgers }) => {
    const dispatch = useAppDispatch();
    const [popup, setPopup] = React.useState(false);
    const { burgetToCart } = useAppSelector(state => state);
    console.log(burgetToCart)
    const showPopup = () => {
        dispatch(moreAboutBurger(burgers))
        setPopup(!popup);
    }

    const addBurgerFromCart = () => {
        dispatch(addBurgerToCart(burgers))
    }
    return (
        <div className={styles.burger_cart}>
            <img className={styles.burger_image} src={`./burgerImg/${burgers.image}`} />
            <div className={styles.burger_text}>
                <p>{burgers.name}</p>
                <div className={styles.burger_price}>
                    <p>{burgers.price} руб.</p>
                    <p>{burgers.weight} гр.</p>
                </div>
            </div>
            <div className={styles.burger_footer}>
                <div onClick={showPopup} className={styles.burger_more}>Подробнее</div>
                {popup && <Popup popup={popup} setPopup={setPopup} />}
                <Button viev='primary' size='s' onClick={addBurgerFromCart}>В корзину</Button>
            </div>

        </div>
    );
};
