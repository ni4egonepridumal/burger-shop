/* eslint-disable @typescript-eslint/ban-ts-comment */
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IBurger } from "../../types";

const myState: IBurger[] = []

export const burgerToCart = createSlice({
    name: "burgerInCart",
    initialState: myState,
    reducers: {
        addBurgerToCart: (state, action: PayloadAction<IBurger>) => {
            //@ts-ignore
            const getBurgerFromLocalStorage = JSON.parse(localStorage.getItem("burger"))
            if (getBurgerFromLocalStorage) {
                const addedBurgerFromLocalStorage = [...getBurgerFromLocalStorage, action.payload]
                state = addedBurgerFromLocalStorage
                localStorage.setItem("burger", JSON.stringify(addedBurgerFromLocalStorage))
                return state
            }
            else {
                const setBurgerFromLocalStore = [...state, action.payload]
                localStorage.setItem("burger", JSON.stringify(setBurgerFromLocalStore))
                return setBurgerFromLocalStore;
            }
        },
        deleteBurgerFromCart: (state, action) => {
            //@ts-ignore
            const getBurgerFromLocalStorage = JSON.parse(localStorage.getItem("burger"));
            if (getBurgerFromLocalStorage) {
                const filterBurger = getBurgerFromLocalStorage.filter((item: IBurger) => item.id !== action.payload)
                state = filterBurger
                localStorage.setItem("burger", JSON.stringify(filterBurger))
                return state
            } else {
                return state = state.filter(item => item.id !== action.payload)
            }

        },
        clearCart: (state) => {
            console.log("rkbr ,sk")
            const getBurgerFromLocalStorage = JSON.parse(localStorage.getItem("burger"));
            if (getBurgerFromLocalStorage) {
                localStorage.clear()
                state = []
                return state
            } else {
                return state = []
            }
        },
        setCountPlusBurger: (state, action: PayloadAction<number>) => {
            //@ts-ignore
            const getBurgerFromLocalStorage = JSON.parse(localStorage.getItem("burger"));
            if (getBurgerFromLocalStorage) {
                const countBurger = getBurgerFromLocalStorage.map((item: IBurger) => +item.id === action.payload ? { ...item, count: item.count + 1 } : { ...item })
                state = countBurger
                localStorage.setItem("burger", JSON.stringify(countBurger))
                return state
            } else {
                return state = state.map(item => +item.id === action.payload ? { ...item, count: item.count + 1 } : { ...item })
            }
        },
        setCountMinusBurger: (state, action: PayloadAction<number>) => {
            //@ts-ignore
            const getBurgerFromLocalStorage = JSON.parse(localStorage.getItem("burger"));
            if (getBurgerFromLocalStorage) {
                const countBurger = getBurgerFromLocalStorage.map((item: IBurger) => +item.id === action.payload ? { ...item, count: item.count - 1 } : { ...item })
                state = countBurger
                localStorage.setItem("burger", JSON.stringify(countBurger))
                return state
            } else {
                return state = state.map(item => +item.id === action.payload ? { ...item, count: item.count - 1 } : { ...item })
            }
        }
    },
}
)

export const { addBurgerToCart, deleteBurgerFromCart, setCountPlusBurger, setCountMinusBurger, clearCart } = burgerToCart.actions;

export default burgerToCart.reducer