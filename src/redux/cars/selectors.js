import { createSelector } from "@reduxjs/toolkit";

export const selectCars = (state) => state.cars.items;
export const selectFavoriteCars = (state) => state.cars.favoriteItems;
export const selectFilterCars = (state) => state.cars.filterItems;
export const selectIsLoading = (state) => state.cars.isLoading;

export const selectFilterFavorite = createSelector(
  [selectCars, selectFavoriteCars],
  (cars, favorite) => {
    return cars.filter((car) => favorite.includes(car.id));
  }
);
