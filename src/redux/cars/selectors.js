export const selectCars = (state) => state.cars.items;
export const selectFavoriteCars = (state) => state.cars.favoriteItems;
export const selectFilterCars = (state) => state.cars.filterItems;
export const selectIsLoading = (state) => state.cars.isLoading;
export const selectIsError = (state) => state.cars.isError;
