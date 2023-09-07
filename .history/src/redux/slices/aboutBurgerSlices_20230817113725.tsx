import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export const aboutBurger = createSlice({
    name: "aboutBurger",
    initialState: [],
    reducers: {
        moreAboutBurger: (state, action: PayloadAction<any>) => {
            console.log(action.payload)
            state = action.payload
            return state
            // action.payload === "alphabet" ? console.log(state.map(item => console.log(item))) : console.log(state.map(item => console.log(item)));

        },
    },
});

export const { moreAboutBurger } = aboutBurger.actions;

export default aboutBurger.reducer;

