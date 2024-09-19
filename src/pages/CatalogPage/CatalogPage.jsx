import toast from "react-hot-toast";
import { PulseLoader } from "react-spinners";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

import CarList from "../../components/CarList/CarList";
import FilterCar from "../../components/FilterCar/FilterCar";
import { fetchMoreCarsThunk } from "../../redux/cars/operations";
import { selectFilterCars, selectIsLoading } from "../../redux/cars/selectors";
import ImageModal from "../../components/ImageModal/ImageModal";

import css from "./CatalogPage.module.css";

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

  useEffect(() => {
    if (isLastPage && page > 1) {
      toast.error("Sorry, these are all cars from the catalog");
    }
  }, [isLastPage, page]);

  return (
    <div className={css.wrapperCatalog}>
      <FilterCar />
      <div className={css.boxCatalog}>
        <CarList />
        <ImageModal />
        {isLoading && (
          <div>
            <PulseLoader
              color="#3470FF"
              size={16}
              className={css.spinnersMore}
            />
          </div>
        )}
        {!isLastPage && !isLoading && (
          <button onClick={handleLoadMore} className={css.btnLoadMore}>
            Load more
          </button>
        )}
      </div>
    </div>
  );
};

export default CatalogPage;
