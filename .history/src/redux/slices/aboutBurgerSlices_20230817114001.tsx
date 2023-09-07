import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export const aboutBurger = createSlice({
    name: "aboutBurger",
    initialState: [],
    reducers: {
        moreAboutBurger: (state, action: PayloadAction<any>) => {
            console.log(action.payload)
            state = [...state, action.payload]
            return state
        },
    },
});

export const { moreAboutBurger } = aboutBurger.actions;

export default aboutBurger.reducer;

