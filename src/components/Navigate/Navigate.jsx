import { NavLink } from "react-router-dom";
import css from "./Navigate.module.css";

const Navigate = () => {
  const addActive = ({ isActive }) => (isActive ? css.active : css.inactive);

  return (
    <nav className={css.navBox}>
      <NavLink className={addActive} to="/">
        Home
      </NavLink>
      <NavLink className={addActive} to="/catalog">
        Catalog
      </NavLink>
      <NavLink className={addActive} to="/favorites">
        Favorites
      </NavLink>
    </nav>
  );
};

export default Navigate;
