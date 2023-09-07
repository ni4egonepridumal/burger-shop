import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { burgerApi } from "./burgerApi";
import aboutBurger from "./slices/aboutBurgerSlices";
import burgetToCart from "./slices/addBurgerToCartSlice";

export const store = configureStore({
  reducer: {
    aboutBurger,
    burgetToCart,
    [burgerApi.reducerPath]: burgerApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(burgerApi.middleware),
});
setupListeners(store.dispatch);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
