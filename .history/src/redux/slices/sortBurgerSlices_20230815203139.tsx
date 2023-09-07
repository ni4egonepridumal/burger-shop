import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export const sortBurger = createSlice({
    name: "sortBurgerprice",
    initialState: [],
    reducers: {
        sortPrice: (state, action: PayloadAction<any>) => {
            console.log(action.payload)
            action.payload === "alphabet" ? state.sort((a, b) => a.price - b.price) : state;

        },
    },
});

export const { sortPrice } = sortBurger.actions;

export default sortBurger.reducer;

