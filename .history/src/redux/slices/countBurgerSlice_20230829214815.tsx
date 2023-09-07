import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IBurger } from "../../types";

const myState: IBurger[] = []

export const countBurger = createSlice({
    name: "countBurger",
    initialState: myState,
    reducers: {
        setCount: (state: IBurger[], action: PayloadAction<number>) => {
            return state
        }


    }
});

export const { setCount } = countBurger.actions;

export default countBurger.reducer;

