import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IBurger } from "../../types";


const myState: IBurger[] = []

export const aboutBurger = createSlice({
    name: "aboutBurger",
    initialState: myState,
    reducers: {
        moreAboutBurger: (state: IBurger[], action: PayloadAction<IBurger>): IBurger[] => {
            return state = [action.payload];
        },

    },
});

export const { moreAboutBurger } = aboutBurger.actions;

export default aboutBurger.reducer;

