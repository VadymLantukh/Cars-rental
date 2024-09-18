import { NavLink } from "react-router-dom";
import css from "./Navigate.module.css";

const Navigate = () => {

  return (
    <nav className={ css.navBox}>
      <NavLink className={css.navLink} to="/">
        Home
      </NavLink>
      <NavLink className={css.navLink} to="/catalog">
        Catalog
      </NavLink>
      <NavLink className={css.navLink} to="/favorites">
        Favorites
      </NavLink>
    </nav>
  );
};

export default Navigate;
