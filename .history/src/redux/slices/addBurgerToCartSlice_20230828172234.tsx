import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IBurger } from "../../types";

//@ts-ignore
const burgerFromLocalStorage = JSON.parse(localStorage.getItem("burger"));
console.log("burgerFromLocalStorage", burgerFromLocalStorage);


const myState: IBurger[] = []

export const burgerToCart = createSlice({
    name: "burgerInCart",
    initialState: myState,
    reducers: {
        /* Работающий вариант, когда нет ЛОкалСторейдж начало*/
        addBurgerToCart: (state, action: PayloadAction<IBurger>) => {
            return [...state, action.payload]
        },

        // deleteBurgerFromCart: (state, action) => {
        //     
        // }
        /* Работающий вариант, когда нет ЛОкалСторейдж конец*/
        // addBurgerToCart: (state, action: PayloadAction<IBurger>) => {
        //     if (burgerFromLocalStorage) {
        //         const newBurger = [...state, action.payload];
        //         localStorage.setItem("burger", JSON.stringify(newBurger));
        //         console.log("сработало условие при которосм в ЛС есть бургеры")
        //         return newBurger
        //     } else {
        //         const newBurger = [...state, action.payload];
        //         localStorage.setItem("burger", JSON.stringify(newBurger));
        //         console.log("сработало условие при которосм в ЛС бургеров НЕТ")
        //         return newBurger
        //     }
        /* dfhbfyn c lj,fdktybtv cthtp cntqn */
        // const newBurger = [...state, action.payload];
        // localStorage.setItem("burger", JSON.stringify(newBurger));
        // console.log("Бургеры, добавляемые с тейт", newBurger)
        // return newBurger
    },
    deleteBurgerFromCart: (state, action) => {
        console.log("бургеры до клика на удаление", burgerFromLocalStorage)
        const some = burgerFromLocalStorage.filter(item => item.id !== action.payload)
        console.log("бургеры после удаления", some)
        localStorage.setItem("burger", JSON.stringify(some));
        return some
    }
},

}
)

export const { addBurgerToCart, deleteBurgerFromCart } = burgerToCart.actions;

export default burgerToCart.reducer