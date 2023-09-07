import { AddressSuggestions, DaDataAddress, DaDataSuggestion } from 'react-dadata';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { InputFromRHF } from '../InputFromRHF';
import { Button } from '../Button';

interface IInputForm {
    name: string,
    tel: number,
    adress: DaDataSuggestion<DaDataAddress>
}

export const DataUser = () => {
    const API_KEY = 'f1283a525fe07a74d40b877ea2bc44c721f6246b';

    const {
        handleSubmit,
        // formState: { errors },
        control
    } = useForm<IInputForm>()
    const onSubmit: SubmitHandler<IInputForm> = (data) => console.log(data)
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
                            label="Телефон для связи"
                            placeholder="79998877654"
                            type="text"
                        />
                    )}
                />
                <label>Введите адрес доставки</label>
                <Controller
                    control={control}
                    name="adress"
                    render={({ field: { onChange, value } }) => (
                        <AddressSuggestions token={API_KEY} value={value} onChange={onChange} />
                    )}
                />
                <Button type='submit' size="m" viev='secondary' >Заказать</Button>
            </form>
        </div>
    );
};

