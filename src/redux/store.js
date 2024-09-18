import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";

import { carsReducer } from "./cars/carsSlice";
import { modalReducer } from "./modal/slice";

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

const carsPersistConfig = {
  key: "cars",
  storage,
  whitelist: ["favoriteItems"],
};

const persistedCarsReducer = persistReducer(carsPersistConfig, carsReducer);

export const store = configureStore({
  reducer: {
    cars: persistedCarsReducer,
    modal: modalReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
