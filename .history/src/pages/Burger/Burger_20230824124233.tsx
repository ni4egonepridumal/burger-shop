import { Link } from "react-router-dom";
import { Button } from "../../components/Button";
import { useAppSelector } from "../../redux/hooks";
import styles from "./burger.module.scss";
import { Feedback } from "../../components/Feedback/feedback";




export const BurgerPage = () => {
    const choseBurger = useAppSelector(state => state.aboutBurger)
    console.log(choseBurger)
    return (
        <div className={styles.container}>
            {choseBurger.map(burger =>
                <div key={burger.id} className={styles.inner}>
                    <img src={`./burgerImg/${burger.image}`} />
                    <div>
                        <div>Цена: {burger.price} руб.</div>
                        <div className={styles.text_color}>Состав:</div>
                        <div>{burger.composition}</div>
                        <div className={styles.text_color}>Отзывы:</div>
                        <div>{burger.comments.map((item: {name: string, comment: string}) => <Feedback key={item.name} itemComment={item} />)}</div>

                        <div className={styles.text_color}>Добавить комментарий:</div>
                        {/**Используй реакт хук форм */}
                        <div className={styles.feedback_size}>
                            <div>
                                <label>Ваше имя</label>
                                <input type="text" />
                            </div>
                            <div className={styles.button}>
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

