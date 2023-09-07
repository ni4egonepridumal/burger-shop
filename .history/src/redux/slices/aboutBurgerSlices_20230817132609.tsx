import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface IBurger {
    composition: string
    deleted: boolean
    description: string
    discount: number
    discountPrice: number
    id: number
    image: string
    isDailyDish: boolean
    limit: number
    name: string
    order: number
    price: number
    weight: number
    comments: string[]
}

const myState: IBurger[] = [];

export const aboutBurger = createSlice({
    name: "aboutBurger",
    initialState: myState,
    reducers: {
        moreAboutBurger: (state: IBurger[], action: PayloadAction<IBurger>) => {
            return state = [action.payload]
        },
    },
});

export const { moreAboutBurger } = aboutBurger.actions;

export default aboutBurger.reducer;

