
import { Button } from "../Button";
import { useAppSelector } from "../../redux/hooks";
import styles from "./burger.module.scss";
import { Feedback } from "../Feedback/feedback";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { InputFromRHF } from "../InputFromRHF";


type InputForm = {
    name: string,
    comment: string,
}

type IBurgerPage = {
    popup: boolean,
    setPopup: (arg0: boolean) => void
}

export const BurgerPage = ({ popup, setPopup }: IBurgerPage) => {
    const choseBurger = useAppSelector(state => state.aboutBurger)
    const {
        handleSubmit,
        // formState: { errors },
        control
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
                        <div className={styles.text_color}>Добавить комментарий:</div>
                        <form onSubmit={handleSubmit(onSubmit)} className={styles.feedback_size}>
                            <Controller
                                control={control}
                                name="name"
                                render={({ field: { onChange, onBlur } }) => (
                                    <InputFromRHF
                                        onMyChange={onChange}
                                        onMyBlur={onBlur}
                                        label="Ваше имя"
                                        placeholder="Например: Анатолий"
                                        type="text"
                                    />
                                )}
                            />
                            <Controller
                                control={control}
                                name="comment"
                                render={({ field: { onChange, onBlur } }) => (
                                    <InputFromRHF
                                        onMyChange={onChange}
                                        onMyBlur={onBlur}
                                        label="Комментарий"
                                        placeholder="Это божественно"
                                        type="text"
                                    />
                                )}
                            />
                            <div style={{ marginTop: "15px" }}>
                                <Button viev="primary" type="submit" size='s'>Добавить</Button>
                            </div>
                        </form>
                        <div className={styles.overflow}>
                            <div className={styles.text_color}>Отзывы:</div>
                            <div>{burger.comments.map((item: { name: string, comment: string }) => <Feedback key={item.name} itemComment={item} />)}</div>
                        </div>

                    </div>
                </div>
            )
            }
            <div className={styles.position}>
                <div style={{ marginRight: "15px" }}>
                    <Button onClick={() => setPopup(!popup)} viev="secondary" size='m'>Вернуться</Button>
                </div>
                <div>
                    <Button viev="secondary" size='m'>В корзину</Button>
                </div>
            </div>
        </div >
    );
};

