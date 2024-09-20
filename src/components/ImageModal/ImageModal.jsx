import ReactModal from "react-modal";
import { useDispatch, useSelector } from "react-redux";

import { customStyle } from "../../helpers/modalStyles";
import { selectCar, selectIsOpenModal } from "../../redux/modal/selectors";
import { closeModal } from "../../redux/modal/slice";

import css from "./ImageModal.module.css";
import { IoCloseOutline } from "react-icons/io5";
ReactModal.setAppElement("#root");

const ImageModal = () => {
  const isOpenModal = useSelector(selectIsOpenModal);
  const selectIsCar = useSelector(selectCar);
  const dispatch = useDispatch();

  if (!selectIsCar) return null;

  const [, city, country] = selectIsCar.address.split(", ");

  const formatRentalConditions = (conditions) => {
    const conditionsArray = conditions.split("\n");
    return conditionsArray.map((condition, index) => {
      if (condition.includes("Minimum age")) {
        const [text, age] = condition.split(":");
        return (
          <p key={index} className={css.modalCondition}>
            {text}: <span className={css.colorText}>{age}</span>
          </p>
        );
      }
      return (
        <p key={index} className={css.modalConditionItem}>
          {condition}
        </p>
      );
    });
  };

  const handleCLoseModal = () => {
    dispatch(closeModal());
  };

  return (
    <ReactModal
      isOpen={isOpenModal}
      onRequestClose={handleCLoseModal}
      style={customStyle}
    >
      <img
        className={css.modalImgCar}
        src={selectIsCar.img}
        alt={`${selectIsCar.make} ${selectIsCar.model}`}
        width="461px"
        height="248px"
      />

      <h3 className={css.modalMainText}>
        {selectIsCar.make}{" "}
        <span className={css.colorText}>{selectIsCar.model}</span>,{" "}
        {selectIsCar.year}
      </h3>

      <p className={css.modalAddText}>
        {city} | {country} | Id: {selectIsCar.id} | Year: {selectIsCar.year} |
        Type: {selectIsCar.type} <br /> Fuel Consumption:{" "}
        {selectIsCar.fuelConsumption} | Engine size: {selectIsCar.engineSize}
      </p>

      <p className={css.modalDescrText}>{selectIsCar.description}</p>

      <p className={css.modalAcrrssorText}>Aceessories and funcionalities:</p>

      <p className={css.modalFunctionText}>
        {[...selectIsCar.accessories.join(" | ")]}
        <br />
        {[...selectIsCar.functionalities.join(" | ")]}
      </p>

      <p className={css.modalConditions}>Rental Conditions:</p>

      <div className={css.listConditions}>
        {formatRentalConditions(selectIsCar.rentalConditions)}
        <p className={css.modalCondition}>
          Mileage:{"  "}
          <span className={css.colorText}>
            {selectIsCar.mileage.toLocaleString()}
          </span>
        </p>
        {
          <p className={css.modalCondition}>
            Price:{" "}
            <span className={css.colorText}> {selectIsCar.rentalPrice} </span>
          </p>
        }
      </div>
      <button className={css.modalBtnRental}>
        <a className={ css.linkRental} href="tel:+380730000000">Rental car</a>
      </button>

      <button className={css.btnCloseModal} onClick={handleCLoseModal}>
        <IoCloseOutline size='24'/>
      </button>
    </ReactModal>
  );
};

export default ImageModal;
