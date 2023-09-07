import { BurgerCart } from "../../components/BurgerCart";
import styles from "./home.module.scss"
import { useGetAllBurgerQuery } from "../../redux";
import MoonLoaderfrom from "react-spinners/MoonLoader";
import React from "react";
import { sortPrice } from "../../redux/slices/sortBurgerSlices";
import { getBurger } from "../../redux/slices/getBurgerSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";

interface IBurger {
    composition: string
    deleted: boolean
    description: string
    discount: number
    discountPrice: number
    id: number
    image: string
    isDailyDish: boolean
    limit: number
    name: string
    order: number
    price: number
    weight: number
}
export const HomePage = () => {
    const { data, isLoading } = useGetAllBurgerQuery();
    const [burger, setBurger] = React.useState("");
    const dispatch = useAppDispatch();
    console.log(burger)
    const sortBurger = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setBurger(e.target.value);
        dispatch(sortPrice(data))
    }

    React.useEffect(() => {
        dispatch(getBurger(data))
    }, [])
    return (
        <div className={styles.container}>
            <h1 className={styles.burger_head}>Выбери свой бургер</h1>
            <div>
                <label>Сортировать по:</label>
                <select value={burger} name="sortBurger" onChange={sortBurger}>
                    <option value={"alphabet"}>Алфавиту</option>
                    <option value={"price"}>Цене</option>
                </select>
            </div>
            <div className={styles.burger_inner}>
                {isLoading ? <div className={styles.loader}><MoonLoaderfrom size={100} /></div> : data?.map((burger: IBurger) => <BurgerCart key={burger.id} burgers={burger} />)}
            </div>

        </div>
    );
};

