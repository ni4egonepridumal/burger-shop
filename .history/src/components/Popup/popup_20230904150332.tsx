import React from 'react';
import styles from "./popup.module.scss"
import { ChoiseBurger } from '../Burger';
import { IBurger } from '../../types';

interface IPopup {
    popup: boolean,
    setPopup: (arg0: boolean) => void,
    burgers: IBurger,

}

export const Popup: React.FC<IPopup> = ({ popup, setPopup, burgers }) => {
    return (
        <div className={styles.modal}>
            <div onClick={() => setPopup(!popup)} className={styles.overlay}></div>
            <div className={styles.modal_content}>
                <ChoiseBurger popup={popup} setPopup={setPopup} burgers={burgers} />
            </div>

        </div>
    );
};

