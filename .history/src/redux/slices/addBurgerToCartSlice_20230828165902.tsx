import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IBurger } from "../../types";

//@ts-ignore
const burgerFromLocalStorage = JSON.parse(localStorage.getItem("burger"));
console.log("burgerFromLocalStorage", burgerFromLocalStorage);


const myState: IBurger[] = []

export const burgerToCart = createSlice({
    name: "burgerInCart",
    initialState: myState,
    reducers: {
        /* Работающий вариант, когда нет ЛОкалСторейдж начало*/
        // addBurgerToCart: (state, action: PayloadAction<IBurger>) => {
        //     return [...state, action.payload]
        // },

        // deleteBurgerFromCart: (state, action) => {
        //     return state.filter(item => item.id !== action.payload)
        // }
        /* Работающий вариант, когда нет ЛОкалСторейдж конец*/
        addBurgerToCart: (state, action: PayloadAction<IBurger>) => {
            const newBurger = [...state, action.payload];
            localStorage.setItem("burger", JSON.stringify(newBurger));
            // console.log("Бургеры, добавляемые с тейт", newBurger)
            return newBurger
        },
        deleteBurgerFromCart: (state, action) => {
            const some = burgerFromLocalStorage.filter(item => item.id !== action.payload)
            console.log(some)
            localStorage.setItem("burger", JSON.stringify(some));
            return some
        }
    },

}
)

export const { addBurgerToCart, deleteBurgerFromCart } = burgerToCart.actions;

export default burgerToCart.reducer