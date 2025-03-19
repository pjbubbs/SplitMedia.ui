import { createBrowserRouter } from "react-router-dom";
import Root from "../Pages/root/root";
import ErrorPage from "../error-page";
import AboutUs from "../Pages/aboutUs";
import ContactUs from "../Pages/contactUs";
import PrivacyPolicy from "../Pages/Terms/privacyPolicy";
import CookiePolicy from "../Pages/Terms/cookiePolicy";
import Register from "../Pages/User/registration/register/register";
import LearnMore from "../Pages/marketing/learnMore";
import Pricing from "../Pages/marketing/pricing";
import Login from "../Pages/User/login";
import SelectPlan from "../Pages/User/registration/selectPlan/selectPlan";
import ThankYou from "../Pages/User/registration/thankYou/ThankYou";
import Logout from "../Pages/User/logout";

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
  { path: "logout", element: <Logout /> },
  { path: "register", element: <Register /> },
  { path: "select-plan", element: <SelectPlan /> },
  { path: "thank-you", element: <ThankYou /> },
  { path: "privacy-policy", element: <PrivacyPolicy /> },
  { path: "learn-more", element: <LearnMore /> },
  { path: "pricing", element: <Pricing /> },
]);
