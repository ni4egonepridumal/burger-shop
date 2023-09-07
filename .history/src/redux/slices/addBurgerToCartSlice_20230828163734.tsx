import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IBurger } from "../../types";

//@ts-ignore
const burgerFromLocalStorage = JSON.parse(localStorage.getItem("burger"));
console.log(burgerFromLocalStorage);


const myState: IBurger[] = []

export const burgerToCart = createSlice({
    name: "burgerInCart",
    initialState: myState,
    reducers: {
        addBurgerToCart: (state, action: PayloadAction<IBurger>) => {
            return [...state, action.payload]
        },
        /* Работающий вариант, когда нет ЛОкалСторейдж начало*/
        // deleteBurgerFromCart: (state, action) => {
        //     return state.filter(item => item.id !== action.payload)
        // }
        /* Работающий вариант, когда нет ЛОкалСторейдж конец*/

        deleteBurgerFromCart: (state, action) => {
            const some = burgerFromLocalStorage.filter(item => item.id !== action.payload)
            localStorage.setItem("burger", JSON.stringify(some));
        }
    },

}
)

export const { addBurgerToCart, deleteBurgerFromCart } = burgerToCart.actions;

export default burgerToCart.reducer