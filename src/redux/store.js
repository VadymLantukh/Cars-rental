import { configureStore } from "@reduxjs/toolkit";
import { carsReducer } from "./cars/carsSlice";

export const store = configureStore({
  reducer: {
    cars: carsReducer,
  },
});
