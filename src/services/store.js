import { configureStore } from "@reduxjs/toolkit";
import { countryAPI } from "./countryAPI";
import countrySlice from "./countrySlice";

export const store = configureStore({
  reducer: {
    [countryAPI.reducerPath]: countryAPI.reducer,
    countries: countrySlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(countryAPI.middleware),
});
