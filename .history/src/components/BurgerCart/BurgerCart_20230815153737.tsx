import { Button } from '../Button';
import styles from './BurgerCart.module.scss';

export const BurgerCart = () => {
    return (
        <div className={styles.burger_cart}>
            <img className={styles.burger_image} src="./burgerImg/light.png" />
            <div className={styles.burger_text}>
                <p>Название</p>
                <div className={styles.burger_price}>
                    <p>price</p>
                    <p>weight</p>
                </div>
            </div>
            <div>
                <p className={styles.burger_more}>Подробнее</p>
                <Button type='primary' size='ы'>В заказ</Button>
            </div>

        </div>
    );
};
