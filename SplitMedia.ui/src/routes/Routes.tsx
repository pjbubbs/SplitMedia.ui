import { createBrowserRouter } from "react-router-dom";
import Root from "../Pages/root/root";
import ErrorPage from "../error-page";
import AboutUs from "../Pages/aboutUs";
import ContactUs from "../Pages/contactUs";
import PrivacyPolicy from "../Pages/Terms/privacyPolicy";
import CookiePolicy from "../Pages/Terms/cookiePolicy";
import Register from "../Pages/User/registration/register/register";
import LearnMore from "../Pages/marketing/learnMore";
import MyAccount from "../Pages/User/myAccount";
import ChangePassword from "../Pages/User/changePassword";
import Pricing from "../Pages/marketing/pricing";
import DashboardPage from "../Pages/User/dashboard/dashboardForm";
import AddGallery from "../Pages/Gallery/addGallery";
import ViewGallery from "../Pages/Gallery/viewGallery/viewGallery";
import Login from "../Pages/User/login";
import SelectPlan from "../Pages/User/registration/selectPlan/selectPlan";
import Payment from "../Pages/User/registration/payment/Payment";
import TakePayment from "../Pages/User/registration/takePayment/TakePayment";
import ThankYou from "../Pages/User/registration/thankYou/ThankYou";
import ProtectedRoute from "./ProtectedRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
  },
  { path: "about-us", element: <AboutUs /> },
  { path: "contact-us", element: <ContactUs /> },
  { path: "cookie-policy", element: <CookiePolicy /> },
  { path: "login", element: <Login /> },
  { path: "register", element: <Register /> },
  { path: "select-plan", element: <SelectPlan /> },
  { path: "thank-you", element: <ThankYou /> },
  { path: "privacy-policy", element: <PrivacyPolicy /> },
  { path: "learn-more", element: <LearnMore /> },
  { path: "pricing", element: <Pricing /> },
  {
    path: "my-account",
    element: (
      <ProtectedRoute>
        <MyAccount />
      </ProtectedRoute>
    ),
  },
  {
    path: "change-password",
    element: (
      <ProtectedRoute>
        <ChangePassword />
      </ProtectedRoute>
    ),
  },
  {
    path: "dashboard",
    element: (
      <ProtectedRoute>
        <DashboardPage />
      </ProtectedRoute>
    ),
  },
  {
    path: "add-gallery",
    element: (
      <ProtectedRoute>
        <AddGallery />
      </ProtectedRoute>
    ),
  },
  {
    path: "gallery/:id",
    element: (
      <ProtectedRoute>
        <ViewGallery />
      </ProtectedRoute>
    ),
  },
  {
    path: "payment",
    element: (
      <ProtectedRoute>
        <Payment />
      </ProtectedRoute>
    ),
  },
  {
    path: "take-payment",
    element: (
      <ProtectedRoute>
        <TakePayment />
      </ProtectedRoute>
    ),
  },
]);
