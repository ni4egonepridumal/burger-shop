import React from 'react';
import styles from "./popup.module.scss"

interface IPopup = {
    popup: boolean,
    setPopup: ()=> void,
}

export const Popup: React.FC<IPopup>  = ({popup, setPopup}) => {
    return (
        <div className={styles.modal}>
            <div onClick={} className={styles.overlay}></div>
            <div className={styles.modal_content}>
                <h2>Hello Modal</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
                    perferendis suscipit officia recusandae, eveniet quaerat assumenda
                    id fugit, dignissimos maxime non natus placeat illo iusto!
                    Sapiente dolorum id maiores dolores? Illum pariatur possimus
                    quaerat ipsum quos molestiae rem aspernatur dicta tenetur. Sunt
                    placeat tempora vitae enim incidunt porro fuga ea.
                </p>
            </div>

        </div>
    );
};

