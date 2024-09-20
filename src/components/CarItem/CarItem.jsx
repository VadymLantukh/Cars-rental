import { useDispatch, useSelector } from "react-redux";
import { MdFavoriteBorder, MdOutlineFavorite } from "react-icons/md";

import { toggleFavorite } from "../../redux/cars/carsSlice";
import { openModal } from "../../redux/modal/slice";
import { selectFavoriteCars } from "../../redux/cars/selectors";

import css from "./CarItem.module.css";

const CarItem = ({ car }) => {
  const dispatch = useDispatch();

  const handleToggleFavorite = () => {
    dispatch(toggleFavorite(car));
  };

  const [, city, country] = car.address.split(", ");

  const isFavorite = useSelector(selectFavoriteCars).find(
    (item) => item.id === car.id
  );

  const handleLearnMore = () => {
    dispatch(openModal(car));
  };

  return (
    <>
      <img
        className={css.imgCar}
        src={car.img}
        alt={`${car.make} ${car.model}`}
        width="274px"
        height="268px"
      />
      <div className={css.boxMainInfo}>
        <p>
          {car.make} {car.model}, {car.year}
        </p>
        <p>{car.rentalPrice}</p>
      </div>

      <p className={css.AddInfo}>
        {city} | {country} | {car.rentalCompany} | {car.type} | {car.model} |{" "}
        {car.id} | {car.functionalities?.[0]}
      </p>

      <button className={css.btnMore} type="button" onClick={handleLearnMore}>
        Learn more
      </button>

      <button
        className={css.btnFavorite}
        type="button"
        onClick={handleToggleFavorite}
      >
        {isFavorite ? (
          <MdOutlineFavorite size="20px" color="#3470ff" />
        ) : (
          <MdFavoriteBorder size="20px" color="#3470ff" />
        )}
      </button>
    </>
  );
};

export default CarItem;
