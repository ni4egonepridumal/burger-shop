import { Link } from 'react-router-dom';
import { Button } from '../Button';
import styles from './BurgerCart.module.scss';

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
}

interface IBurgerCartProps {
    burgers: IBurger
}

export const BurgerCart: React.FC<IBurgerCartProps> = ({ burgers }) => {
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
                <Link to='/burger' className={styles.burger_more}>Подробнее</Link>
                <Button type='primary' size='s'>В корзину</Button>
            </div>

        </div>
    );
};
