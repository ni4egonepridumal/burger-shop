import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IBurger } from "../../types";

//@ts-ignore
// const burgerFromLocalStorage = JSON.parse(localStorage.getItem("burger"));
// console.log("burgerFromLocalStorage", burgerFromLocalStorage);


const myState: IBurger[] = []

export const burgerToCart = createSlice({
    name: "burgerInCart",
    initialState: myState,
    reducers: {
        /* Работающий вариант, когда нет ЛОкалСторейдж начало*/
        //     addBurgerToCart: (state, action: PayloadAction<IBurger>) => {
        //         return [...state, action.payload]
        //     },

        //     deleteBurgerFromCart: (state, action) => {
        //         return state = state.filter(item => item.id !== action.payload)
        //     }
        // },
        /* Работающий вариант, когда нет ЛОкалСторейдж начало*/
        addBurgerToCart: (state, action: PayloadAction<IBurger>) => {
            const addedToLocalStorageBurger = JSON.parse(localStorage.getItem("burger"))
            if (addedToLocalStorageBurger) {
                const some = [...addedToLocalStorageBurger, action.payload]
                localStorage.setItem("burger", JSON.stringify(some))
                return some
            }
            else {
                const some2 = [...state, action.payload]
                localStorage.setItem("burger", JSON.stringify(some2))
                return some2;
            }

        },

        deleteBurgerFromCart: (state, action) => {
            const getBurgerFromCart = JSON.parse(localStorage.getItem("burger"));
            if (getBurgerFromCart) {
                const newSetBur = state.filter(item => item.id !== action.payload)
                localStorage.setItem("burger", JSON.stringify(newSetBur))
                return newSetBur
            } else {
                return state = state.filter(item => item.id !== action.payload)
            }

        }
    },
}
)

export const { addBurgerToCart, deleteBurgerFromCart } = burgerToCart.actions;

export default burgerToCart.reducer