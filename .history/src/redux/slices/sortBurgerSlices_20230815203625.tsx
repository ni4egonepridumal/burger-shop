import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export const sortBurger = createSlice({
    name: "sortBurgerprice",
    initialState: [],
    reducers: {
        sortPrice: (state, action: PayloadAction<any>) => {
            // console.log(action.payload)
            action.payload === "alphabet" ? console.log("alphabet") : console.log("NOalphabet");

        },
    },
});

export const { sortPrice } = sortBurger.actions;

export default sortBurger.reducer;

