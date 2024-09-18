import Navigate from "../Navigate/Navigate";
import css from "./AppBar.module.css";

const AppBar = () => {
  return (
    <header className={css.headerBox}>
      <Navigate />
    </header>
  );
};

export default AppBar;
