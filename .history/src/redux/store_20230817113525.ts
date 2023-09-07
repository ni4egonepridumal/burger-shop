import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { burgerApi } from "./burgerApi";
import sortBurger from "./slices/sortBurgerSlices";

export const store = configureStore({
  reducer: {
    sortBurger,
    [burgerApi.reducerPath]: burgerApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(burgerApi.middleware),
});
setupListeners(store.dispatch);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
