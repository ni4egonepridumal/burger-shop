import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IBurger } from "../../types";

const myState: IBurger[] = []

export const burgetToCart = createSlice({
    name: "burgerInCart",
    initialState: myState,
    reducers: {
        addBurgerToCart: (state, action: PayloadAction<IBurger>) => {
            const arr = [...state, action.payload];
            return [...new Set(arr)]
        }
    }
})

export const { addBurgerToCart } = burgetToCart.actions;

export default burgetToCart.reducer