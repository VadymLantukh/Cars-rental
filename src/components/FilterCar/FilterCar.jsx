import { useState } from "react";
import { useDispatch } from "react-redux";
import Select from "react-select";
import { brandOptions, priceOptions } from "../../helpers/brandAndPrice";
import { filterCars } from "../../redux/cars/carsSlice";
import css from "./FilterCar.module.css";

const FilterCar = () => {
  const dispatch = useDispatch();

  const [brand, setBrand] = useState(null);
  const [price, setPrice] = useState(null);

  const handleFilter = () => {
    dispatch(filterCars({ brand: brand?.value, price: price?.value }));
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
    dispatch(filterCars({ brand: null, price: null }));
  };

  return (
    <div className={css.boxFilter}>
      <Select
        className={css.select}
        options={brandOptions}
        onChange={handleChangeSelect}
        value={brand}
        placeholder="Select brand"
        classNamePrefix="react-select"
      />

      <Select
        className={css.select}
        options={priceOptions}
        onChange={handleChangeSelectPrice}
        value={price}
        placeholder="Select price"
        classNamePrefix="react-select"
      />

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
