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

export const DataUser = () => {
    const API_KEY = 'f1283a525fe07a74d40b877ea2bc44c721f6246b';
    const [orderJSON, setOrderJSON] = React.useState({});

    const addDataFromOrderJSON = async (dataFromForm: IInputForm, burgerOnCart: IBurger[]) => {
        const filterBurgerOnCart = burgerOnCart.map((item: IBurger) => item.name);
        await setOrderJSON({
            burger: filterBurgerOnCart,
            adress: dataFromForm.adress.value,
            name: dataFromForm.name,
            tel: dataFromForm.tel,
            comment: dataFromForm.comment,
        });
        console.log("orderJSON", orderJSON);

        // console.log(JSON.stringify( orderJSON))
    }

    const { burgerToCart } = useAppSelector(state => state);
    const burgerFromLocalStorage = JSON.parse(localStorage.getItem("burger"))
    const {
        handleSubmit,
        // formState: { errors },
        control
    } = useForm<IInputForm>()
    const onSubmit: SubmitHandler<IInputForm> = (data) => addDataFromOrderJSON(data, burgerToCart)
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
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
                    name="tel"
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
                    render={({ field: { onChange, value } }) => (
                        <AddressSuggestions
                            token={API_KEY}
                            value={value}
                            onChange={onChange}
                            defaultQuery='Екатеринбург' />
                    )}
                />
                <div style={{ marginTop: '20px' }}>
                    <Button type='submit' size="m" viev='secondary' >Заказать</Button>
                </div>
            </form>
        </div>
    );
};

