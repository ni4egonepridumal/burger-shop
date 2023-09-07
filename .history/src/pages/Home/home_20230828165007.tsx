import { BurgerItem } from "../../components/BurgerItem";
import styles from "./home.module.scss"
import { useGetAllBurgerQuery, useSortBurgerFromNameQuery } from "../../redux";
import MoonLoaderfrom from "react-spinners/MoonLoader";
import React from "react";
import { IBurger } from "../../types";


export const HomePage = () => {
    const { data: allBurger, isLoading } = useGetAllBurgerQuery();
    const { data: sortBurgerAlphabet } = useSortBurgerFromNameQuery();
    const [burger, setBurger] = React.useState<string>("");
    const sortBurger = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setBurger(e.target.value);
    }
    return (
        <div className={styles.container}>
            <h1 className={styles.burger_head}>Выбери свой бургер</h1>
            <div>
                <label>Сортировать по:</label>
                <select value={burger} name="sortBurger" onChange={sortBurger}>
                    <option value={"price"}>Цене</option>
                    <option value={"alphabet"}>Алфавиту</option>
                </select>
            </div>
            <div className={styles.burger_inner}>
                {isLoading ?
                    <div className={styles.loader}><MoonLoaderfrom size={100} /></div>
                    : burger === "alphabet" ? sortBurgerAlphabet?.map((burger: IBurger) => <BurgerItem key={burger.id} burgers={burger} />)
                        : allBurger?.map((burger: IBurger) => <BurgerItem key={burger.id} burgers={burger} />)}
            </div>
            <button onClick={() => window.localStorage.clear()}>Очистить лок стейт</button>


        </div>
    );
};

