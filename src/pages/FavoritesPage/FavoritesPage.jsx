import { useSelector } from "react-redux";

import { selectFavoriteCars } from "../../redux/cars/selectors";
import CarItem from "../../components/CarItem/CarItem";
import ImageModal from "../../components/ImageModal/ImageModal";

import css from "./FavoritesPage.module.css";

const FavoritesPage = () => {
  const favoriteCars = useSelector(selectFavoriteCars);

  return (
    <div>
      <h2 className={css.titleFavorite}>My favorite cars</h2>
      {favoriteCars.length > 0 ? (
        <ul className={css.listFavorite}>
          {favoriteCars.map((car) => {
            return (
              <li key={car.id} className={css.itemFavorite}>
                <CarItem car={car} />
              </li>
            );
          })}
        </ul>
      ) : (
        <p className={css.textError}>
          If you have added anything to your favorites yet, click on the icon on
          the car card
        </p>
      )}

      <ImageModal />
    </div>
  );
};

export default FavoritesPage;
