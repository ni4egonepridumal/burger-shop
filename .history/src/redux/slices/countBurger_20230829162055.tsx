import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IBurger } from "../../types";

const myState: IBurger[] = []

export const burgerCount = createSlice({
    name: "count",
    initialState: myState,
    reducers: {
        setPlusCount: (state, action: PayloadAction<number>) => {
            const burgerCount = state.find(item => item.id === action.payload)
            if (burgerCount) {
                burgerCount.count++
            }

        }
    },
}
)

export const { setPlusCount } = burgerCount.actions;

export default burgerCount.reducer