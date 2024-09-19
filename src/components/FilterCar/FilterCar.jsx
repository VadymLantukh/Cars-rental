import { useState } from "react";
import { useDispatch } from "react-redux";
import Select from "react-select";
import { brandOptions } from "../../helpers/brandAndPrice";
import { filterCars } from "../../redux/cars/carsSlice";
import css from "./FilterCar.module.css";

const FilterCar = () => {
  const dispatch = useDispatch();

  const [brand, setBrand] = useState(null);

  const handleFilter = () => {
    dispatch(filterCars({ brand: brand?.value }));
  };

  const handleChangeSelect = (selected) => {
    setBrand(selected);
  };

  const handleReset = () => {
    setBrand(null);
    dispatch(filterCars({ brand: null }));
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

      <button type="button" onClick={handleFilter} className={css.btnSeacrh}>
        Search
      </button>
      <button type="button" onClick={handleReset} className={css.btnReset}>
        Show All Brands
      </button>
    </div>
  );
};

export default FilterCar;
