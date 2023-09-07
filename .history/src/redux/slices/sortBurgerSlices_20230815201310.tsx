import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export const sortBurger = createSlice({
    name: "sortBurgerprice",
    initialState: [],
    reducers: {
        sortPrice: (state, action: PayloadAction<any>) => {
            state = action.payload
        },
    },
});

export const { sortPrice } = sortBurger.actions;

export default sortBurger.reducer;

