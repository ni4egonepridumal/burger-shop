import { Link } from "react-router-dom";
import { Button } from "../../components/Button";
import { useAppSelector } from "../../redux/hooks";
import styles from "./burger.module.scss";
import { Feedback } from "../../components/Feedback/feedback";
import { useForm, SubmitHandler } from "react-hook-form";


type InputForm = {
    name: string,
    comment: string,
}

export const BurgerPage = () => {
    const choseBurger = useAppSelector(state => state.aboutBurger)
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<InputForm>()
    const onSubmit: SubmitHandler<InputForm> = (data) => console.log(data)
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
                        <div>{burger.comments.map((item: { name: string, comment: string }) => <Feedback key={item.name} itemComment={item} />)}</div>

                        <div className={styles.text_color}>Добавить комментарий:</div>
                        {/**Используй реакт хук форм */}
                        <form onSubmit={handleSubmit(onSubmit)} className={styles.feedback_size}>
                            <div>
                                <label>Ваше имя</label>
                                <input placeholder="Например: Анатолий" type="text" {...register('name', { required: true })} />
                            </div>
                            <div className={styles.button}>
                                <label>Комментарий</label>
                                <input placeholder="Это божественно" type="text" {...register("comment", { required: true })} />
                            </div>
                            <Button viev="primary" type="submit" size='s'>Добавить</Button>
                        </form>
                    </div>
                </div>
            )
            }
            <div className={styles.position}>
                <Link to="/"><Button viev="primary" size='s'>Вернуться</Button></Link>
                <Button viev="primary" size='s'>В корзину</Button>
            </div>
        </div >
    );
};

