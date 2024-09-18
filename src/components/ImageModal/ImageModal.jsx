import ReactModal from "react-modal";
import { customStyle } from "../../helpers/modalStyles";
import { useDispatch, useSelector } from "react-redux";
import { selectCar, selectIsOpenModal } from "../../redux/modal/selectors";
import { closeModal } from "../../redux/modal/slice";
import css from "./ImageModal.module.css";

ReactModal.setAppElement("#root");

const ImageModal = () => {
  const isOpenModal = useSelector(selectIsOpenModal);
  const selectIsCar = useSelector(selectCar);
  const dispatch = useDispatch();

  const handleCLoseModal = () => {
    dispatch(closeModal());
  };

  if (!selectIsCar) return null;

  return (
    <ReactModal
      isOpen={isOpenModal}
      onRequestClose={handleCLoseModal}
      style={customStyle}
    >
      <img
        src={selectIsCar.img}
        alt={`${selectIsCar.make} ${selectIsCar.model}`}
        width="426px"
        height="248px"
      />
      <h3>
        {selectIsCar.make} {selectIsCar.model}, {selectIsCar.year}
      </h3>
      <p>
        {selectIsCar.address} | Id: {selectIsCar.id} | Year: {selectIsCar.year}{" "}
        | Type: {selectIsCar.type} <br /> Fuel Consumption:{" "}
        {selectIsCar.fuelConsumption} | Engine size: {selectIsCar.engineSize}
      </p>
      <p>{selectIsCar.description}</p>
      <p>Aceessories and funcionalities:</p>
      <p>
        {[...selectIsCar.accessories.join(" | ")]}
        <br />
        {[...selectIsCar.functionalities.join(" | ")]}
      </p>
      <p>Rental Conditions:</p>
      <div>
        {selectIsCar.rentalConditions.split("\n").map((condition, index) => (
          <div key={index}>
            {condition
              .split("")
              .map((part, i) => (i === 1 ? <span key={i}>{part}</span> : part))}
          </div>
        ))}
        <p>
          Mileage: <span>{selectIsCar.mileage}</span>
        </p>
        <p>
          Price: <span>{selectIsCar.rentalPrice}</span>
        </p>
      </div>

      <button>
        <a href="tel:+380730000000">Rental car</a>
      </button>
      <button className={css.btnCloseModal} onClick={handleCLoseModal}>
        <svg width="24" height="24" stroke="#121417">
          <use href={"../../../src/img/symbol-defs.svg#close"} />
        </svg>
      </button>
    </ReactModal>
  );
};

export default ImageModal;
