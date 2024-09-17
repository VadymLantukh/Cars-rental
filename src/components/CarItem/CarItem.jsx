// import css from "./CarItem.module.css";

import { useDispatch } from "react-redux";
import { toggleFavorite } from "../../redux/cars/carsSlice";

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
}) => {
  const dispatch = useDispatch();

  const handleToggleFavorite = () => {
    dispatch(toggleFavorite(id));
  };

  return (
    <div>
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

      <button type="button">Learn more</button>
      <button type="button" onClick={handleToggleFavorite}>
        Add fav
      </button>
    </div>
  );
};

export default CarItem;
