import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IBurger } from "../../types";

const myState: IBurger[] = []

export const burgerToCart = createSlice({
    name: "burgerInCart",
    initialState: myState,
    reducers: {
        addBurgerToCart: (state, action: PayloadAction<IBurger>) => {
            const getBurgerFromLocalStorage = JSON.parse(localStorage.getItem("burger"))
            if (getBurgerFromLocalStorage) {
                const addedBurgerFromLocalStorage = [...getBurgerFromLocalStorage, action.payload]
                localStorage.setItem("burger", JSON.stringify(addedBurgerFromLocalStorage))
                return addedBurgerFromLocalStorage
            }
            else {
                const setBurgerFromLocalStore = [...state, action.payload]
                localStorage.setItem("burger", JSON.stringify(setBurgerFromLocalStore))
                return setBurgerFromLocalStore;
            }
        },

        deleteBurgerFromCart: (state, action) => {
            const getBurgerFromLocalStorage = JSON.parse(localStorage.getItem("burger"));
            if (getBurgerFromLocalStorage) {
                const filterBurger = getBurgerFromLocalStorage.filter((item: IBurger) => item.id !== action.payload)
                localStorage.setItem("burger", JSON.stringify(filterBurger))
                return filterBurger
            } else {
                return state = state.filter(item => item.id !== action.payload)
            }

        }
    },
}
)

export const { addBurgerToCart, deleteBurgerFromCart } = burgerToCart.actions;

export default burgerToCart.reducer