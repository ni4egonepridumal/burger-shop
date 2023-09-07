import styles from './BurgerCart.module.scss';

export const BurgerCart = () => {
    return (
        <div className={styles.burger_cart}>
                    <img src="./burgerImg/light.png" />
                    <div className={styles.burger_text}>
                        <p>Название</p>
                        <div>
                            <p>price</p>
                            <p>weight</p>
                        </div>
                    </div>
                    <p>Подробнее</p>
                </div>
    );
};
