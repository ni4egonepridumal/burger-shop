import { useAppSelector } from "../../redux/hooks";


export const BurgerPage = () => {
    const choseBurger = useAppSelector(state => state.aboutBurger)
    console.log(choseBurger)
    return (
        <div>
            {choseBurger.map(burger =>

                <div>
                    <img src={`./img/burgerImg/${burger.image}`} />
                </div>

            )}
        </div>
    );
};

