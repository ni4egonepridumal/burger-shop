import { BurgerCart } from "../../components/BurgerCart";
import styles from "./home.module.scss"
import { useGetAllBurgerQuery } from "../../redux";
import MoonLoaderfrom from "react-spinners/MoonLoader";


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
    return (
        <div className={styles.container}>
            <h1 className={styles.burger_head}>Выбери свой бургер</h1>
            <div className={styles.burger_inner}>
                {isLoading ? data?.map((burger: IBurger) => <BurgerCart key={burger.id} burgers={burger} />) : <div><MoonLoaderfrom size="100" cssOverride={{ textAlign: 'center' }} /></div>}
            </div>

        </div>
    );
};

