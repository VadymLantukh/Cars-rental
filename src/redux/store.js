import { configureStore } from "@reduxjs/toolkit";
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
import storage from "redux-persist/lib/storage";

import { carsReducer } from "./cars/carsSlice";
import { modalReducer } from "./modal/slice";

const carsPersistConfig = {
  key: "carsFavorite",
  version: 1,
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
