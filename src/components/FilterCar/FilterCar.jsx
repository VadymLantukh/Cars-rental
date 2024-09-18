import { useState } from "react";
import { useDispatch } from "react-redux";
import Select from "react-select";
import { brandOptions } from "../../helpers/brandAndPrice";
import { filterCars } from "../../redux/cars/carsSlice";

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
    <div>
      <Select
        options={brandOptions}
        onChange={handleChangeSelect}
        value={brand}
        placeholder="Select brand"
      />

      <button type="button" onClick={handleFilter}>
        Search
      </button>
      <button type="button" onClick={handleReset}>
        Show All Brands
      </button>
    </div>
  );
};

export default FilterCar;
