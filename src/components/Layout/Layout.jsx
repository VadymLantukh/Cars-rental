import { Suspense } from "react";
import AppBar from "../AppBar/AppBar";
import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";

const Layout = () => {
  return (
    <div>
      <AppBar />
      <Suspense fallback={<div>Please wait...</div>}>
        <Outlet />
      </Suspense>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

export default Layout;
