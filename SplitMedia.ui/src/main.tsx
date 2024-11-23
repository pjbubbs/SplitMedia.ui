import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/root/root";
import ErrorPage from "./error-page";
import AboutUs from "./routes/aboutUs";
import { RecoilRoot } from "recoil";
import ContactUs from "./routes/contactUs";
import PrivacyPolicy from "./routes/Terms/privacyPolicy";
import CookiePolicy from "./routes/Terms/cookiePolicy";
import Register from "./routes/User/registration/register/register";
import LearnMore from "./routes/marketing/learnMore";
import "./index.css";
import "./main.css";
import "bootstrap/dist/js/bootstrap.min.js";
import MyAccount from "./routes/User/myAccount";
import ChangePassword from "./routes/User/changePassword";
import Pricing from "./routes/marketing/pricing";
import { setContext } from "@apollo/client/link/context";
import DashboardPage from "./routes/User/dashboard/dashboardPage";
import AddGallery from "./routes/Gallery/addGallery";
import ViewGallery from "./routes/Gallery/viewGallery";
import Login from "./routes/User/login";
import MyGalleries from "./routes/Gallery/myGalleries/myGalleries";
import SelectPlan from "./routes/User/registration/selectPlan/selectPlan";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
  },
  {
    path: "about-us",
    element: <AboutUs />,
  },
  {
    path: "contact-us",
    element: <ContactUs />,
  },
  {
    path: "cookie-policy",
    element: <CookiePolicy />,
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "register",
    element: <Register />,
  },
  {
    path: "select-plan",
    element: <SelectPlan />,
  },
  {
    path: "my-account",
    element: <MyAccount />,
  },
  {
    path: "change-password",
    element: <ChangePassword />,
  },

  {
    path: "privacy-policy",
    element: <PrivacyPolicy />,
  },
  {
    path: "learn-more",
    element: <LearnMore />,
  },
  {
    path: "pricing",
    element: <Pricing />,
  },
  {
    path: "dashboard",
    element: <DashboardPage />,
  },
  {
    path: "add-gallery",
    element: <AddGallery />,
  },
  {
    path: "gallery/:id",
    element: <ViewGallery />,
  },
  {
    path: "mygalleries",
    element: <MyGalleries />,
  },
]);

const accessToken = document.cookie
  .split("; ")
  .find((row) => row.startsWith("accessToken="))
  ?.split("=")[1];

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: accessToken ? `Bearer ${accessToken}` : "",
    },
  };
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RecoilRoot>
      <RouterProvider router={router} />
    </RecoilRoot>
  </React.StrictMode>
);
