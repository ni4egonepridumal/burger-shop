import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export const sortBurger = createSlice({
    name: "sortBurgerprice",
    initialState: [],
    reducers: {
        sortPrice: (state, action: PayloadAction<any>) => {
            state = action.payload;
            state.sort((a, b) => a.price - b.price)
        },
    },
});

export const { sortPrice } = sortBurger.actions;

export default sortBurger.reducer;

