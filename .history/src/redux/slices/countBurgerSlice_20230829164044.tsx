import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IBurger } from "../../types";

const myState: IBurger[] = []

export const burgerCount = createSlice({
    name: "count",
    initialState: myState,
    reducers: {
        setPlusCount: (state, action: PayloadAction<number>) => {
            const getBurgerFromLocalStorage = JSON.parse(localStorage.getItem("burger"))
            if (getBurgerFromLocalStorage) {
                state = getBurgerFromLocalStorage
                state.find(item => item.id === action.payload)
            } else {
                return state.find(item => item.id === action.payload)
            }

        }
    },
}
)

export const { setPlusCount } = burgerCount.actions;

export default burgerCount.reducer