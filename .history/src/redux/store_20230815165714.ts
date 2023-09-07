import { configureStore } from "@reduxjs/toolkit";
import { burgerApi } from "./burgerApi";

export const store = configureStore({
  reducer: { burgerApi },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
