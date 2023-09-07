import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export const getAllBurger = createSlice({
    name: "getBurger",
    initialState: [],
    reducers: {
        getBurger: (state, action: PayloadAction<any>) => {
            state = action.payload
        },
    },
});

export const { getBurger } = getAllBurger.actions;

export default getAllBurger.reducer;
