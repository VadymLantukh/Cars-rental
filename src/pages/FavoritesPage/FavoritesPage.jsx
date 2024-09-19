import css from "./FavoritesPage.module.css";

import { selectFilterFavorite } from "../../redux/cars/selectors";
import CarItem from "../../components/CarItem/CarItem";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchCarsThunk } from "../../redux/cars/operations";
import ImageModal from "../../components/ImageModal/ImageModal";

const FavoritesPage = () => {
  const favoriteCars = useSelector(selectFilterFavorite);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCarsThunk());
  }, [dispatch]);

  return (
    <div>
      <h1 className={css.titleFavorite}>My favorite cars</h1>
      <ul className={css.listFavorite}>
        {favoriteCars.map((car) => {
          return (
            <li key={car.id} className={css.itemFavorite}>
              <CarItem {...car} />
            </li>
          );
        })}
      </ul>
      <ImageModal />
    </div>
  );
};

export default FavoritesPage;
