import React from "react";
import ReactDOM from "react-dom/client";
import { Outlet, RouterProvider } from "react-router-dom";
import { RecoilRoot } from "recoil";
import "./index.css";
import "./main.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { router } from "./Routes/Routes";
import { UserProvider } from "./Context/useAuth";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <UserProvider>
      <RecoilRoot>
        <ToastContainer />
        <RouterProvider router={router} />
        <Outlet />
      </RecoilRoot>
    </UserProvider>
  </React.StrictMode>
);
