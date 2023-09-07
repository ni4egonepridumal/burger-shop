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
            const newState = [...state, action.payload]
            console.log("бургеры при добалении в корзину и соответсвенно в стейт", newState)
            console.log("burgerFromLocalStorage", burgerFromLocalStorage)
            window.localStorage.setItem('burger', JSON.stringify(newState))
            console.log("burgerFromLocalStorage", burgerFromLocalStorage)
            return newState;
        },
        deleteBurgerFromCart: (state, action) => {
            console.log("burgerFromLokalStore", burgerFromLocalStorage)
            // const stateAfterDelete = state.filter(item => item.id !== action.payload)
            const arr = burgerFromLocalStorage.filter(item => item.id !== action.payload)
            window.localStorage.setItem('burger', JSON.stringify(arr))
            console.log("бургеры в локальной хранилище", arr)
            // window.localStorage.setItem('burger', JSON.stringify(stateAfterDelete))
            return arr
        }
    }
})

export const { addBurgerToCart, deleteBurgerFromCart } = burgerToCart.actions;

export default burgerToCart.reducer