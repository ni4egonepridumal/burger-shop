import { BurgerCart } from "../../components/BurgerCart";
import styles from "./home.module.scss"
import { useGetAllBurgerQuery } from "../../redux";


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
    const { data } = useGetAllBurgerQuery();
    return (
        <div className={styles.container}>
            <h1 className={styles.burger_head}>Выбери свой бургер</h1>
            <div className={styles.burger_inner}>
                {data?.map((burger: IBurger) => <BurgerCart key={burger.id} burgers={burger} />)}
            </div>

        </div>
    );
};

