import { Link } from "react-router-dom";
import { Button } from "../../components/Button";
import { useAppSelector } from "../../redux/hooks";
import styles from "./burger.module.scss";


export const BurgerPage = () => {
    const choseBurger = useAppSelector(state => state.aboutBurger)
    return (
        <div className={styles.container}>
            {choseBurger.map(burger =>

                <div key={burger.id} className={styles.inner}>
                    <img src={`./burgerImg/${burger.image}`} />
                    <div>
                        <p>Цена: {burger.price} руб.</p>
                        <p>Состав:</p>
                        <p>{burger.composition}</p>
                        <p>Отзывы:</p>
                        <p>{burger.comments.map(comment => comment.comment)}</p>
                    </div>
                    <p>Добавить комментарий:</p>
                    <input type="text" />
                </div>

            )}
            <div className={styles.position}>
                <Link to="/"><Button type="primary" size='s'>Вернуться</Button></Link>
                <Button type="primary" size='s'>В корзину</Button>
            </div>
        </div>
    );
};

