import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { burgerApi } from "./burgerApi";
import aboutBurger from "./slices/aboutBurgerSlices";
import burgerToCart from "./slices/addBurgerToCartSlice";
import countBurger from "./slices/countBurgerSlice";

export const store = configureStore({
  reducer: {
    aboutBurger,
    burgerToCart,
    countBurgerб
    [burgerApi.reducerPath]: burgerApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(burgerApi.middleware),
});
setupListeners(store.dispatch);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
