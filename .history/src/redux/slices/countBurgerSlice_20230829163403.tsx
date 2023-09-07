import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IBurger } from "../../types";

const myState: IBurger[] = []

export const burgerCount = createSlice({
    name: "count",
    initialState: myState,
    reducers: {
        setPlusCount: (state, action: PayloadAction<number>) => {
            console.log(action.payload)
            const burgerItemCount = state.find(item => item.id === action.payload);
            console.log(burgerItemCount)
            if (burgerItemCount) {
                burgerItemCount.count + 1
            }

        }
    },
}
)

export const { setPlusCount } = burgerCount.actions;

export default burgerCount.reducer