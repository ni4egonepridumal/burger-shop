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
    // const choseBurger = useAppSelector(state => state.aboutBurger)
    const { aboutBurger, burgerToCart } = useAppSelector(state => state)
    const [addComment, { isError }] = useAddCommentFromClientMutation();
    const [resp, setRest] = React.useState({})


    const funcionfromdataToComment = () => {
        fetch('https://64be50915ee688b6250c2e7a.mockapi.io/BroBurger?id=1', {
            method: 'PUT', // or PATCH
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(
                {
                    id: burgers.id,
                    composition: burgers.composition,
                    deleted: false,
                    description: "",
                    discount: 0,
                    discountPrice: 139,
                    image: burgers.image,
                    isDailyDish: false,
                    limit: 100,
                    name: burgers.name,
                    order: 1,
                    count: burgers.count,
                    price: burgers.price,
                    weight: burgers.weight,
                    comments: [
                        {
                            name: "Саша",
                            comment: "Вкусный, буду брать еще"
                        },
                        {
                            name: "Олег",
                            comment: "Сочный, пальчики оближешь !"
                        },
                        {
                            name: "Алексей",
                            comment: "Комент Алексея"
                        }
                    ]
                })
        }).then(res => {
            if (res.ok) {
                return res.json();
            }
            // handle error
        }).then(task => {
            console.log(task)
        }).catch(error => {
            console.log(error)
        })
    }

    const addNewComment = (item1, burgers: IBurger) => {
        //@ts-ignore
        let newBurger = {};
        newBurger = burgers,
            newBurger.comments.push(item1)
        console.log(newBurger)
    }
    console.log(resp)
    const dispatch = useAppDispatch();

    const handleClick = () => {
        !choiseBurger ? addBurgerFromCart() : removeBurgerfromCart()
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
        // formState: { errors },
        control
    } = useForm<InputForm>()
    const onSubmit: SubmitHandler<InputForm> = (data) => addNewComment(data, burgers)
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
                    <Button viev={'secondary'} size='m' onClick={handleClick}>{choiseBurger ? "Удалить" : "В корзину"}</Button>
                </div>
            </div>
            <button onClick={funcionfromdataToComment}>Передать данные в новый объекет</button>
        </div >
    );
};

