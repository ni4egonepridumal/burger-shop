import { Link } from 'react-router-dom';
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
            <div className={styles.burger_footer}>
                <Link to={'/burger'} className={styles.burger_more}>Подробнее</Link>
                <Button type='primary' size='s'>В корзину</Button>
            </div>

        </div>
    );
};
