import numeral from "numeral";

export const handleMileageChange = (e, setter) => {
  const value = e.target.value.replace(/\D/g, "");
  const formattedValue = numeral(value).format("0,0");
  setter(formattedValue);
};
