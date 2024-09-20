import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";

import { brandOptions, priceOptions } from "../../helpers/brandAndPrice";
import { filterCars } from "../../redux/cars/carsSlice";

import css from "./FilterCar.module.css";
import { selectFilterCars } from "../../redux/cars/selectors";
import toast from "react-hot-toast";

const FilterCar = () => {
  const [hasSearched, setHasSearched] = useState(false);
  const dispatch = useDispatch();
  const cars = useSelector(selectFilterCars);
  const [brand, setBrand] = useState(null);
  const [price, setPrice] = useState(null);

  useEffect(() => {
    if (hasSearched && cars.length === 0) {
      toast.error(
        "No cars were found according to your search, a possible reason is that you have not yet uploaded car card, using the Load more button"
      );
    }
  }, [cars, hasSearched]);

  const handleFilter = () => {
    setHasSearched(true);
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
