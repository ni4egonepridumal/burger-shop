import React from "react";
import { Button } from "../Button";
import styles from "./burger.module.scss";
import { Feedback } from "../Feedback/feedback";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { InputFromRHF } from "../InputFromRHF";
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { addBurgerToCart, deleteBurgerFromCart } from '../../redux/slices/addBurgerToCartSlice'
import { IBurger } from "../../types";
import { useAddCommentFromClientMutation } from "../../redux";



type InputForm = {
    name: string,
    comment: string,
}

type IBurgerPage = {
    popup: boolean,
    setPopup: (arg0: boolean) => void
    burgers: IBurger,
}

export const ChoiseBurger = ({ popup, setPopup, burgers }: IBurgerPage) => {
    const { aboutBurger, burgerToCart } = useAppSelector(state => state)
    const [addComment, { isError }] = useAddCommentFromClientMutation();

    const cloneBurgerObj = structuredClone(burgers)

    const addNewComment = async (dataFromForm: InputForm, cloneBurgerObj: IBurger) => {
        await cloneBurgerObj.comments.push(dataFromForm)
        await addComment(cloneBurgerObj).unwrap()
    }
    const dispatch = useAppDispatch();

    const handleClick = () => {
        !choiseBurger ? addBurgerFromCart() : removeBurgerfromCart()
    }
    const handleFlag = () => {
        if (errors.name || errors.comment || formWatch[0] === undefined || formWatch[1] === undefined) {
            alert("заполните пожалуйста обязательное поле")
        } else {
            alert("коментарий добавлен, после модерации он появится")
            reset({ name: "" })
        }

    }
    const addBurgerFromCart = () => {
        dispatch(addBurgerToCart(burgers))
    }
    const removeBurgerfromCart = () => {
        dispatch(deleteBurgerFromCart(burgers.id))
    }
    let burgerFromLocalStorage = [];
    burgerFromLocalStorage = JSON.parse(localStorage.getItem("burger"));
    const choiseBurger = burgerFromLocalStorage ? burgerFromLocalStorage?.some((burger: IBurger) => burger.id === burgers.id) : burgerToCart?.some((burger: IBurger) => burger.id === burgers.id)
    const {
        handleSubmit,
        formState: { errors },
        control,
        watch,
        reset
    } = useForm<InputForm>({
        mode: "onBlur"
    })
    const formWatch = watch(["name", "comment"])

    const onSubmit: SubmitHandler<InputForm> = (data) => addNewComment(data, cloneBurgerObj)
    return (
        <div className={styles.container}>
            {aboutBurger.map(burger =>
                <div key={burger.id} className={styles.inner}>
                    <img src={`./burgerImg/${burger.image}`} />
                    <div>
                        <div><span className={styles.text_color}>Цена:</span> {burger.price} руб.</div>
                        <div className={styles.text_color}>Состав:</div>
                        <div>{burger.composition}</div>
                        <div className={styles.text_color}>Добавить комментарий:</div>
                        <form onSubmit={handleSubmit(onSubmit)} className={styles.feedback_size}>
                            <Controller
                                control={control}
                                name="name"
                                rules={{ required: "Поле обязательное для заполнения", pattern: { value: /^[а-яА-ЯёЁa-zA-Z0-9\s]+$/, message: "Начните с буквы, вы ведь человек ??" } }}
                                render={({ field: { onChange, onBlur, value } }) => (
                                    <InputFromRHF
                                        onMyChange={onChange}
                                        onMyBlur={onBlur}
                                        label="Ваше имя"
                                        placeholder="Например: Анатолий"
                                        type="text"
                                        value={value}
                                    />
                                )}
                            />
                            <span className={styles.errors}>{errors?.name && errors.name.message}</span>
                            <Controller
                                control={control}
                                name="comment"
                                rules={{ required: "Поле обязательное для заполнения", pattern: { value: /^[а-яА-ЯёЁa-zA-Z0-9\s]+$/, message: "Начните с буквы, вы ведь человек ??" } }}
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
                            <span className={styles.errors}>{errors?.comment && errors?.comment.message}</span>
                            <div style={{ marginTop: "15px" }}>
                                <Button viev="primary" type="submit" size='s' onClick={handleFlag}>Добавить</Button>
                            </div>
                        </form>
                        <div className={styles.overflow}>
                            <div className={styles.text_color}>Отзывы:</div>

                            <div>{burger.comments.map((item: { name: string, comment: string }) => <Feedback key={item.comment} itemComment={item} />)}</div>
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
                    <Button viev={'secondary'} size='m' onClick={handleClick}>{choiseBurger ? "Удалить" : "В корзину"}</Button>
                </div>
            </div>
        </div >
    );
};

