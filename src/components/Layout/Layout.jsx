import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { MoonLoader } from "react-spinners";
import { useSelector } from "react-redux";

import { selectIsError } from "../../redux/cars/selectors";
import AppBar from "../AppBar/AppBar";
import ErrorServer from "../ErrorServer/ErrorServer";

import css from "./Layout.module.css";

const Layout = () => {
  const isError = useSelector(selectIsError);

  return isError ? (
    <ErrorServer />
  ) : (
    <div className={css.wrapper}>
      <AppBar />
      <Suspense
        fallback={
          <div className={css.boxSuspense}>
            <p className={css.textLoader}>Please wait...</p>
            <div>
              <MoonLoader color="#3470FF" size={16} />
            </div>
          </div>
        }
      >
        <Outlet />
      </Suspense>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

export default Layout;
