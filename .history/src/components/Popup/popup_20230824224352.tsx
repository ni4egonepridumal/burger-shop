import React from 'react';
import styles from "./popup.module.scss"
import { BurgerPage } from '../../pages/Burger';

interface IPopup {
    popup: boolean,
    setPopup: (arg0: boolean) => void,

}

export const Popup: React.FC<IPopup> = ({ popup, setPopup }) => {
    if (!popup) {
        document.body.classList.add('active-modal')
        console.log("rerender open")
    } else {
        document.body.classList.remove('active-modal')
        console.log("rerender closet")
    }
    return (
        <div className={styles.modal}>
            <div onClick={() => setPopup(!popup)} className={styles.overlay}></div>
            <div className={styles.modal_content}>
                <BurgerPage popup={popup} setPopup={setPopup} />
            </div>

        </div>
    );
};

