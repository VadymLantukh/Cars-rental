import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";

import { brandOptions, priceOptions } from "../../helpers/brandAndPrice";
import { filterCars } from "../../redux/cars/carsSlice";

import css from "./FilterCar.module.css";
import { selectFilterCars } from "../../redux/cars/selectors";
import toast from "react-hot-toast";

const FilterCar = () => {
  const [isSearch, setIsSearch] = useState(false);
  const dispatch = useDispatch();
  const cars = useSelector(selectFilterCars);
  const [brand, setBrand] = useState(null);
  const [price, setPrice] = useState(null);
  const [mileageFrom, setMileageFrom] = useState("");
  const [mileageTo, setMileageTo] = useState("");

  useEffect(() => {
    if (isSearch && cars.length === 0) {
      toast.error(
        "No cars were found according to your search, a possible reason is that you have not yet uploaded car card, using the Load more button"
      );
    }
  }, [cars, isSearch]);

  const handleFilter = () => {
    setIsSearch(true);
    dispatch(
      filterCars({
        brand: brand?.value,
        price: price?.value,
        mileageFrom: mileageFrom,
        mileageTo: mileageTo,
      })
    );
  };

  const handleChangeSelect = (selected) => {
    setBrand(selected);
  };

  const handleChangeSelectPrice = (selected) => {
    setPrice(selected);
  };

  const handleChangeFrom = (e) => {
    setMileageFrom(e.target.value);
  };

  const handleChangeTo = (e) => {
    setMileageTo(e.target.value);
  };

  const handleReset = () => {
    setBrand(null);
    setPrice(null);
    setMileageFrom("");
    setMileageTo("");
    dispatch(
      filterCars({
        brand: null,
        price: null,
        mileageFrom: "",
        mileageTo: "",
      })
    );
  };

  return (
    <div className={css.boxFilter}>
      <label className={css.labelSelect}>
        Car brand
        <Select
          className={css.select}
          options={brandOptions}
          onChange={handleChangeSelect}
          value={brand}
          placeholder="Enter the text"
          classNamePrefix="react-select"
        />
      </label>

      <label className={css.labelSelect}>
        Price/ 1 hour
        <Select
          className={css.select}
          options={priceOptions}
          onChange={handleChangeSelectPrice}
          value={price}
          placeholder="To $"
          classNamePrefix="react-select"
        />
      </label>

      <label className={css.labelSelect}>
        Car mileage / km
        <div className={css.inputBox}>
          <input
            className={css.inputMileageLeft}
            type="number"
            placeholder="From"
            value={mileageFrom}
            onChange={handleChangeFrom}
          />
          <input
            className={css.inputMileageRight}
            type="number"
            placeholder="To"
            value={mileageTo}
            onChange={handleChangeTo}
          />
        </div>
      </label>

      <button type="button" onClick={handleFilter} className={css.btnSeacrh}>
        Search
      </button>
      <button type="button" onClick={handleReset} className={css.btnReset}>
        Reset fields
      </button>
    </div>
  );
};

export default FilterCar;
