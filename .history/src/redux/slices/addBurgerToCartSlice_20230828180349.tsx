import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IBurger } from "../../types";

const myState: IBurger[] = []

export const burgerToCart = createSlice({
    name: "burgerInCart",
    initialState: myState,
    reducers: {
        addBurgerToCart: (state, action: PayloadAction<IBurger>) => {
            const addedToLocalStorageBurger = JSON.parse(localStorage.getItem("burger"))
            if (addedToLocalStorageBurger) {
                const some = [...addedToLocalStorageBurger, action.payload]
                localStorage.setItem("burger", JSON.stringify(some))
                return some
            }
            else {
                const some2 = [...state, action.payload]
                localStorage.setItem("burger", JSON.stringify(some2))
                return some2;
            }

        },

        deleteBurgerFromCart: (state, action) => {
            const getBurgerFromLocalStorage = JSON.parse(localStorage.getItem("burger"));
            if (getBurgerFromLocalStorage) {
                const filterBurger = getBurgerFromLocalStorage.filter((item: IBurger) => item.id !== action.payload)
                localStorage.setItem("burger", JSON.stringify(filterBurger))
                return filterBurger
            } else {
                console.log("Сработало удаление с условием ГИЧЕГО НЕТ");
                return state = state.filter(item => item.id !== action.payload)
            }

        }
    },
}
)

export const { addBurgerToCart, deleteBurgerFromCart } = burgerToCart.actions;

export default burgerToCart.reducer