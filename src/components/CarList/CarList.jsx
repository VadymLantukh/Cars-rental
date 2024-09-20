import { useSelector } from "react-redux";

import { selectFilterCars } from "../../redux/cars/selectors";
import CarItem from "../CarItem/CarItem";

import css from "./CarList.module.css";

const CarList = () => {
  const cars = useSelector(selectFilterCars);

  return (
    <ul className={css.carList}>
      {cars.map((car) => {
        return (
          <li key={car.id} className={css.itemCar}>
            <CarItem car={car} />
          </li>
        );
      })}
    </ul>
  );
};

export default CarList;
