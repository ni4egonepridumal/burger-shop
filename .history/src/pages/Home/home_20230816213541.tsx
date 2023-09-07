import { BurgerCart } from "../../components/BurgerCart";
import styles from "./home.module.scss"
import { useGetAllBurgerQuery, useSortBurgerFromNameQuery } from "../../redux";
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
    // const url = new URL('https://64be50915ee688b6250c2e7a.mockapi.io/BroBurger');
    // url.searchParams.append('sortBy', 'weight');
    // fetch(url, {
    //     method: 'GET',
    //     headers: { 'content-type': 'application/json' },
    // }).then(res => {
    //     if (res.ok) {
    //         return res.json();
    //     }
    //     // handle error
    // }).then(tasks => {
    //     console.log(tasks)
    // }).catch(error => {
    //     // handle error
    // })


    const { data, isLoading } = useGetAllBurgerQuery();
    const { data } = useSortBurgerFromNameQuery()
    console.log(data)
    const [burger, setBurger] = React.useState("");
    const dispatch = useAppDispatch();
    const allBurger = useAppSelector(state => state.sortBurger);
    console.log(allBurger)
    const sortBurger = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setBurger(e.target.value);
        // dispatch(sortPrice(data))
    }

    React.useEffect(() => {
        dispatch(sortPrice(data))
        console.log("htylth")
    }, [allBurger])

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
            <button onClick={ }>Сортировать по имени</button>
        </div>
    );
};

