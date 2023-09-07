import { Link } from "react-router-dom";
import { Button } from "../../components/Button";
import { useAppSelector } from "../../redux/hooks";
import styles from "./burger.module.scss";
import { Feedback } from "../../components/Feedback/feedback";


export const BurgerPage = () => {
    const choseBurger = useAppSelector(state => state.aboutBurger)
    return (
        <div className={styles.container}>
            {choseBurger.map(burger =>
                <div key={burger.id} className={styles.inner}>
                    <img src={`./burgerImg/${burger.image}`} />
                    <div>
                        <p>Цена: {burger.price} руб.</p>
                        <p className={styles.text_color}>Состав:</p>
                        <p>{burger.composition}</p>
                        <p className={styles.text_color}>Отзывы:</p>
                        <p>{burger.comments.map(comment => <Feedback key={comment.name} comments={comment} />)}</p>

                        <p className={styles.text_color}>Добавить комментарий:</p>
                        {/**Используй реакт хук форм */}
                        <div>
                            <div>
                                <label>Ваше имя</label>
                                <input type="text" />
                            </div>
                            <div>
                                <label>Комментарий</label>
                                <input type="text" />
                            </div>
                            <Button type="primary" size='s'>Добавить</Button>
                        </div>
                    </div>
                </div>
            )
            }
            <div className={styles.position}>
                <Link to="/"><Button type="primary" size='s'>Вернуться</Button></Link>
                <Button type="primary" size='s'>В корзину</Button>
            </div>
        </div >
    );
};

