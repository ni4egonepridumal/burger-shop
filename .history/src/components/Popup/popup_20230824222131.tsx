import React from 'react';
import styles from "./popup.module.scss"
import { BurgerItem } from '../BurgerItem';

interface IPopup {
    popup: boolean,
    setPopup: (arg0: boolean) => void,
    burgers: IBurger
}

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


export const Popup: React.FC<IPopup> = ({ popup, setPopup, burgers }) => {
    return (
        <div className={styles.modal}>
            <div onClick={() => setPopup(!popup)} className={styles.overlay}></div>
            <div className={styles.modal_content}>
            <BurgerItem burgers={burgers}/>
            </div>

        </div>
    );
};

