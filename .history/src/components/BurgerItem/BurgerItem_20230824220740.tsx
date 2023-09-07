import { Button } from '../Button';
import styles from './BurgerItem.module.scss';
import { useAppDispatch } from '../../redux/hooks';
import { moreAboutBurger } from '../../redux/slices/aboutBurgerSlices';
import React from 'react';

interface IBurger {
    composition: string
    deleted: boolean
    description: string
    discount: number
    discountPrice: number
    id: number
    image: string
    isDailyDish: boolean
    limit: number
    name: string
    order: number
    price: number
    weight: number
    comments: [{ name: string, comment: string }]
}

interface IBurgerCartProps {
    burgers: IBurger
}

export const BurgerItem: React.FC<IBurgerCartProps> = ({ burgers }) => {
    // const dispatch = useAppDispatch();
    const [popup, setPopup] = React.useState(false);

    const showPopup = () => {
        setPopup(!popup);
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
                <Button viev='primary' size='s' onClick={() => console.log(burgers.id)}>В корзину</Button>
            </div>

        </div>
    );
};
