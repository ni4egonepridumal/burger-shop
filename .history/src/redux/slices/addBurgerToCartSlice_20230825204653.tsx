import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IBurger } from "../../types";

const myState: IBurger[] = []

export const burgetToCart = createSlice({
    name: "burgerInCart",
    initialState: myState,
    reducers: {
        addBurgerToCart: (state, action: PayloadAction<IBurger>) => {
            state = [...state, action.payload];
        }
    }
})

export const { addBurgerToCart } = burgetToCart.actions;

export default burgetToCart.reducer