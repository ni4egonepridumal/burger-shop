import { PayloadAction, createSlice } from "@reduxjs/toolkit";




export const sortBurger = createSlice({
    name: "sortBurgerprice",
    initialState: [],
    reducers: {
        sortPrice: (state, action: PayloadAction<any>) => {
            console.log(action.payload)
            state = action.payload
            return state
            // action.payload === "alphabet" ? console.log(state.map(item => console.log(item))) : console.log(state.map(item => console.log(item)));

        },
    },
});

export const { sortPrice } = sortBurger.actions;

export default sortBurger.reducer;

