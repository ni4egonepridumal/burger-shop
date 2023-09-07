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
            } else {
                const itemBur = state.find(item => item.id === action.payload);
                if (itemBur) {
                    itemBur.count++
                }

            }

        }
    },
}
)

export const { setPlusCount } = burgerCount.actions;

export default burgerCount.reducer