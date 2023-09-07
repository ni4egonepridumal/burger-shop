import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IBurger } from "../../types";

const myState: IBurger[] = []

export const burgetToCart = createSlice({
    name: "burgerInCart",
    initialState: myState,
    reducers: {
        addBurgerToCart: (state, action: PayloadAction<IBurger>) => {
            const newState = [...state, action.payload]
            window.localStorage.setItem('burger', JSON.stringify(newState))
            return newState;
        },
        deleteBurgerFromCart: (state, action) => {
            const newState = state.filter(item => item.id !== action.payload)
            window.localStorage.setItem('burger', JSON.stringify(newState))
            return newState
        }
    }
})

export const { addBurgerToCart, deleteBurgerFromCart } = burgetToCart.actions;

export default burgetToCart.reducer