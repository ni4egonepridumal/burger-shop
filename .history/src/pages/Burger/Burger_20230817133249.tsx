import { useAppSelector } from "../../redux/hooks";

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
    comments: string[]
}

export const BurgerPage = () => {
    const choseBurger: IBurger = useAppSelector(state => state.aboutBurger)
    console.log(choseBurger)
    return (
        <div>
            {choseBurger.name}
        </div>
    );
};

