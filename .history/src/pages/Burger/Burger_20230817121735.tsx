import { useAppSelector } from "../../redux/hooks";

export const BurgerPage = () => {
    const choseBurger = useAppSelector(state => state.aboutBurger)
    console.log(choseBurger)
    return (
        <div>
            {choseBurger.map(item => item.name)}
        </div>
    );
};

