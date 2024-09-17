// import css from "./FavoritesPage.module.css";

import { useSelector } from "react-redux";
import { selectFilterFavorite } from "../../redux/cars/selectors";
import CarItem from "../../components/CarItem/CarItem";

const FavoritesPage = () => {
  const favoriteCars = useSelector(selectFilterFavorite);
console.log(favoriteCars);
  return (
    <div>
      <h1>My favorite cars</h1>
      <ul>
        {favoriteCars.map((car) => {
          return (
            <li key={car.id}>
              <CarItem {...car} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default FavoritesPage;
