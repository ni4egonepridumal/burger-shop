import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export const sortBurger = createSlice({
    name: "sortBurgerprice",
    initialState: [],
    reducers: {
        sortPrice: (state, action: PayloadAction<any>) => {
            // console.log(action.payload)
            action.payload === "alphabet" ? console.log(state) : console.log(state);

        },
    },
});

export const { sortPrice } = sortBurger.actions;

export default sortBurger.reducer;

