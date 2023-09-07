import { BurgerCart } from "../../components/BurgerCart";
import styles from "./home.module.scss"
import { useGetAllBurgerQuery } from "../../redux";
import MoonLoaderfrom from "react-spinners/MoonLoader";
import React from "react";


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
    console.log(burger)
    return (
        <div className={styles.container}>
            <h1 className={styles.burger_head}>Выбери свой бургер</h1>
            <div>
                <label>Сортировать по:</label>
                <select value={burger} name="sortBurger" onChange={(e) => setBurger(e.target.value)}>
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

