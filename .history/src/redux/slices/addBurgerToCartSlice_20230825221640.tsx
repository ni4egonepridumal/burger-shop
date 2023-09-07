import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IBurger } from "../../types";

const myState: IBurger[] = []

export const burgetToCart = createSlice({
    name: "burgerInCart",
    initialState: myState,
    reducers: {
        addBurgerToCart: (state, action: PayloadAction<IBurger>) => {
            return [...state, action.payload];
        },
        deleteBurgerFromCart: (state, action) => {
            return state.filter(item => item.id !== action.payload)
        }
    }
})

export const { addBurgerToCart, deleteBurgerFromCart } = burgetToCart.actions;

export default burgetToCart.reducer