import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";
import numeral from "numeral";
import toast from "react-hot-toast";

import { brandOptions, priceOptions } from "../../helpers/brandAndPrice";
import { filterCars } from "../../redux/cars/carsSlice";
import { selectFilterCars } from "../../redux/cars/selectors";
import { handleMileageChange } from "../../helpers/numeral";

import css from "./FilterCar.module.css";

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
    const mileageFromValue = numeral(mileageFrom).value() || 0;
    const mileageToValue = numeral(mileageTo).value() || 0;
    dispatch(
      filterCars({
        brand: brand?.value,
        price: price?.value,
        mileageFrom: mileageFromValue,
        mileageTo: mileageToValue,
      })
    );
  };

  const handleChangeSelect = (selected) => {
    setBrand(selected);
  };

  const handleChangeSelectPrice = (selected) => {
    setPrice(selected);
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
            type="text"
            placeholder="From"
            value={mileageFrom}
            onChange={(e) => handleMileageChange(e, setMileageFrom)}
          />
          <input
            className={css.inputMileageRight}
            type="text"
            placeholder="To"
            value={mileageTo}
            onChange={(e) => handleMileageChange(e, setMileageTo)}
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
