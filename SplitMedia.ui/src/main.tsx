import React from "react";
import ReactDOM from "react-dom/client";
import { Outlet, RouterProvider } from "react-router-dom";
import { RecoilRoot } from "recoil";
import "./index.css";
import "./main.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { UserProvider } from "./Context/useAuth";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { routerConfig } from "./RoutesSetup/RoutesConfig";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <UserProvider>
      <RecoilRoot>
        <ToastContainer />
        <RouterProvider router={routerConfig} />
        <Outlet />
      </RecoilRoot>
    </UserProvider>
  </React.StrictMode>
);
