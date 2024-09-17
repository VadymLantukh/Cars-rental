// import css from "./CatalogPage.module.css";

import { useDispatch, useSelector } from "react-redux";
import CarList from "../../components/CarList/CarList";
import FilterCar from "../../components/FilterCar/FilterCar";
import { fetchMoreCarsThunk } from "../../redux/cars/operations";
import { useState } from "react";
import { selectFilterCars, selectIsLoading } from "../../redux/cars/selectors";

const CatalogPage = () => {
  const dispatch = useDispatch();
  const perPage = 12;
  const cars = useSelector(selectFilterCars);
  const [page, setPage] = useState(1);
  const isLoading = useSelector(selectIsLoading);

  const handleLoadMore = () => {
    const nextPage = page + 1;
    setPage(nextPage);
    dispatch(fetchMoreCarsThunk(nextPage));
  };

  const isLastPage = cars.length % perPage !== 0 || cars.length === 0;

  return (
    <div>
      <FilterCar />
      <CarList />
      {isLoading && <p>Загрузка</p>}
      {isLastPage ? (
        <p>Sorry</p>
      ) : (
        <button onClick={handleLoadMore}>Load more</button>
      )}
    </div>
  );
};

export default CatalogPage;
