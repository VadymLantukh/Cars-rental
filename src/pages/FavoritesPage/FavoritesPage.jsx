import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import { selectFilterFavorite } from "../../redux/cars/selectors";
import CarItem from "../../components/CarItem/CarItem";
import { fetchCarsThunk } from "../../redux/cars/operations";
import ImageModal from "../../components/ImageModal/ImageModal";

import css from "./FavoritesPage.module.css";

const FavoritesPage = () => {
  const favoriteCars = useSelector(selectFilterFavorite);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCarsThunk());
  }, [dispatch]);

  return (
    <div>
      <h1 className={css.titleFavorite}>My favorite cars</h1>
      {favoriteCars.length > 0 ? (
        <ul className={css.listFavorite}>
          {favoriteCars.map((car) => {
            return (
              <li key={car.id} className={css.itemFavorite}>
                <CarItem {...car} />
              </li>
            );
          })}
        </ul>
      ) : (
          <p className={ css.textError}>
          If you have added anything to your favorites yet, click on the icon on
          the car card
        </p>
      )}

      <ImageModal />
    </div>
  );
};

export default FavoritesPage;
