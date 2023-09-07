import React from 'react';
import { AddressSuggestions, DaDataAddress, DaDataSuggestion } from 'react-dadata';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { InputFromRHF } from '../InputFromRHF';
import { Button } from '../Button';
import "./dataUser.scss"
import { useAppSelector } from '../../redux/hooks';
import { IBurger } from '../../types';


interface IInputForm {
    name: string,
    tel: number,
    comment: string
    adress: DaDataSuggestion<DaDataAddress>
}

interface IBurgerChoise {
    name: string,
    countBurger: number,
}

type IPropsDataUser = {
    totalPrice: number,
    setFlag: (arg0: boolean) => void;
    flag: boolean
}

export const DataUser: React.FC<IPropsDataUser> = ({ totalPrice, setFlag, flag }) => {
    const API_KEY = 'f1283a525fe07a74d40b877ea2bc44c721f6246b';

    const [orderJSON, setOrderJSON] = React.useState({});
    const { burgerToCart } = useAppSelector(state => state);
    const burgerFromLocalStorage = JSON.parse(localStorage.getItem("burger"))
    const filterBurgerOnCart = burgerToCart.map((item: IBurger) => ({ "name": item.name, "countBurger": item.count }));
    const filterBurgerOnLokalStorage = burgerFromLocalStorage.map((item: IBurger) => ({ "name": item.name, "countBurger": item.count }));
    const addDataFromOrderJSON = (dataFromForm: IInputForm, filterBurgerOnCart: IBurgerChoise[]) => {
        setOrderJSON({
            burger: filterBurgerOnCart && filterBurgerOnLokalStorage,
            adress: dataFromForm.adress.value,
            nameUser: dataFromForm.name,
            tel: dataFromForm.tel,
            comment: dataFromForm.comment,
            price: totalPrice,
        });
        setFlag(!flag)
    }
    console.log(JSON.stringify(orderJSON))
    const {
        handleSubmit,
        formState: { errors },
        control
    } = useForm<IInputForm>({
        mode: "onBlur"
    })
    const onSubmit: SubmitHandler<IInputForm> = (data) => addDataFromOrderJSON(data, filterBurgerOnCart)
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Controller
                    control={control}
                    name="name"
                    rules={{ required: "Поле обязательное для заполнения", pattern: { value: /^[а-яА-ЯёЁa-zA-Z0-9\s]+$/, message: "Начните с буквы, вы ведь человек ??" } }}
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
                <span className="errors">{errors?.name && errors.name.message}</span>
                <Controller
                    control={control}
                    name="tel"
                    rules={{ required: "Поле обязательное для заполнения", pattern: { value: /^(\+)?((\d{2,3}) ?\d|\d)(([ -]?\d)|( ?(\d{2,3}) ?)){5,12}\d$/, message: "Начните с буквы, вы ведь человек ??" } }}
                    render={({ field: { onChange, onBlur } }) => (
                        <InputFromRHF
                            onMyChange={onChange}
                            onMyBlur={onBlur}
                            label="Телефон"
                            placeholder="79998877654"
                            type="text"
                        />
                    )}
                />
                <span className="errors">{errors?.tel && errors.tel.message}</span>
                <Controller
                    control={control}
                    name="comment"
                    render={({ field: { onChange, onBlur } }) => (
                        <InputFromRHF
                            onMyChange={onChange}
                            onMyBlur={onBlur}
                            label="Особые пожелания"
                            placeholder="Сделайте с любовью"
                            type="text"
                        />
                    )}
                />
                <label>Введите адрес доставки</label>
                <Controller
                    control={control}
                    name="adress"
                    rules={{ required: "Поле обязательное для заполнения" }}
                    render={({ field: { onChange, value } }) => (
                        <AddressSuggestions
                            token={API_KEY}
                            value={value}
                            onChange={onChange}
                            defaultQuery='Екатеринбург' />
                    )}
                />
                <div style={{ marginTop: '20px' }}>
                    <Button type='submit' size="m" viev='secondary'>Заказать</Button>
                </div>
            </form>

        </div>
    );
};

