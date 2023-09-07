import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IBurger } from "../../types";

const myState: IBurger[] = []

export const countBurger = createSlice({
    name: "countBurger",
    initialState: myState,
    reducers: {
        setCountBurger: (state: IBurger[], action: PayloadAction<number>) => {
            const arr = state.filter(item => item.id === action.payload ? item.count++ : item),
            return arr
        }


    }
});

export const { setCountBurger } = countBurger.actions;

export default countBurger.reducer;

