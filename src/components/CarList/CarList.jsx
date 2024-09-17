// import css from './AutoList.module.css'

import { useDispatch, useSelector } from "react-redux";
import { selectFilterCars } from "../../redux/cars/selectors";
import CarItem from "../CarItem/CarItem";
import { useEffect } from "react";
import { fetchCarsThunk } from "../../redux/cars/operations";

const CarList = () => {
  const cars = useSelector(selectFilterCars);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCarsThunk());
  }, [dispatch]);

  return (
    <ul>
      {cars.map((car) => {
        return (
          <li key={car.id}>
            <CarItem {...car} />
          </li>
        );
      })}
    </ul>
  );
};

export default CarList;
