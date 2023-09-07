import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { useGetAllBurgerQuery } from "..";


const { data } = useGetAllBurgerQuery()
export const sortBurger = createSlice({
    name: "sortBurgerprice",
    initialState: data,
    reducers: {
        sortPrice: (state, action: PayloadAction<any>) => {
            console.log(action.payload)
            state = action.payload
            // action.payload === "alphabet" ? console.log(state.map(item => console.log(item))) : console.log(state.map(item => console.log(item)));

        },
    },
});

export const { sortPrice } = sortBurger.actions;

export default sortBurger.reducer;

