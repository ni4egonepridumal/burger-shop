import { Button } from '../Button';
import { Popup } from '../Popup';
import styles from './BurgerItem.module.scss';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { moreAboutBurger } from '../../redux/slices/aboutBurgerSlices';
import { addBurgerToCart, deleteBurgerFromCart } from '../../redux/slices/addBurgerToCartSlice'
import React from 'react';
import { IBurger } from '../../types';


interface IBurgerCartProps {
    burgers: IBurger
}

export const BurgerItem: React.FC<IBurgerCartProps> = ({ burgers }) => {
    const dispatch = useAppDispatch();
    const [popup, setPopup] = React.useState(false);
    const burgerToCart = useAppSelector((state) => state.burgerToCart);
    const showPopup = () => {
        window.scrollTo(0, 0);
        dispatch(moreAboutBurger(burgers))
        setPopup(!popup);
    }

    const handleClick = () => {
        !choiseBurger ? addBurgerFromCart() : removeBurgerfromCart()
    }
    const addBurgerFromCart = () => {
        dispatch(addBurgerToCart(burgers))
    }
    const removeBurgerfromCart = () => {
        dispatch(deleteBurgerFromCart(burgers.id))
    }
    let burgerFromLocalStorage = [];
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    burgerFromLocalStorage = JSON.parse(localStorage.getItem("burger"));
    const choiseBurger = burgerFromLocalStorage ? burgerFromLocalStorage?.some((burger: IBurger) => burger.id === burgers.id) : burgerToCart?.some((burger: IBurger) => burger.id === burgers.id)
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
                {popup && <Popup popup={popup} setPopup={setPopup} burgers={burgers} />}
                <Button viev={choiseBurger ? 'secondary' : 'primary'} size='s' onClick={handleClick}>{choiseBurger ? "Удалить" : "В корзину"}</Button>
            </div>
        </div>
    );
};
