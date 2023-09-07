import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IBurger } from "../../types";

const myState: IBurger[] = []

export const burgetToCart = createSlice({
    name: "burgerInCart",
    initialState: myState,
    reducers: {
        addBurgerToCart: (state, action: PayloadAction<IBurger>) => {
            const arr = [...state, action.payload];
            return state = arr.filter(item => item.name !== action.payload.name)
        }
    }
})

export const { addBurgerToCart } = burgetToCart.actions;

export default burgetToCart.reducer