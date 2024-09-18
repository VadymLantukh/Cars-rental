import css from "./CarItem.module.css";

import { useDispatch, useSelector } from "react-redux";
import { toggleFavorite } from "../../redux/cars/carsSlice";
import { openModal } from "../../redux/modal/slice";
import { selectFavoriteCars } from "../../redux/cars/selectors";

const CarItem = ({
  id,
  img,
  make,
  model,
  year,
  rentalPrice,
  address,
  rentalCompany,
  type,
  functionalities,
  fuelConsumption,
  engineSize,
  description,
  accessories,
  rentalConditions,
  mileage,
}) => {
  const dispatch = useDispatch();

  const handleToggleFavorite = () => {
    dispatch(toggleFavorite(id));
  };

  const isFavorite = useSelector(selectFavoriteCars).includes(id);

  const handleLearnMore = () => {
    dispatch(
      openModal({
        id,
        img,
        make,
        model,
        year,
        rentalPrice,
        type,
        functionalities,
        address,
        fuelConsumption,
        engineSize,
        description,
        accessories,
        rentalConditions,
        mileage,
      })
    );
  };

  return (
    <>
      <img src={img} alt={`${make} ${model}`} width="274px" height="268px" />
      <div>
        <p>
          {make} {model}, {year}
        </p>
        <p>{rentalPrice}</p>
      </div>

      <div>
        <p>{address}</p>
        <p>{rentalCompany}</p>
        <p>{type}</p>
        <p>{model}</p>
        <p>{id}</p>
        <p>{functionalities?.[0]}</p>
      </div>

      <button type="button" onClick={handleLearnMore}>
        Learn more
      </button>

      <button
        className={css.btnFavorite}
        type="button"
        onClick={handleToggleFavorite}
      >
        <svg className={css.iconFavorite} width="18" height="18">
          <use
            href={`../../../src/img/symbol-defs.svg#${
              isFavorite ? "active" : "normal"
            }`}
          />
        </svg>
      </button>
    </>
  );
};

export default CarItem;
