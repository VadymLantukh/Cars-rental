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

  return (
    <div>
      <Select
        options={brandOptions}
        onChange={setBrand}
        placeholder="Select brand"
      />

      <button type="button" onClick={handleFilter}>
        Search
      </button>
    </div>
  );
};

export default FilterCar;
