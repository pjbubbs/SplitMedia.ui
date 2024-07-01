import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './routes/root';
import ErrorPage from './error-page';
import AboutUs from './routes/aboutUs';
import { RecoilRoot } from 'recoil';
import ContactUs from './routes/contactUs';
import PrivacyPolicy from './routes/Terms/privacyPolicy';
import CookiePolicy from './routes/Terms/cookiePolicy';
import Register from './routes/User/register';
import LearnMore from './routes/marketing/learnMore';
import './index.css'
import './App.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import MyAccount from './routes/User/myAccount';
import ChangePassword from './routes/User/changePassword';
import { Login } from '@mui/icons-material';
import Pricing from './routes/marketing/pricing';

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
    element: <CookiePolicy />
  },
  {
    path: "login",
    element: <Login />
  },
  {
    path: "register",
    element: <Register />
  },
  {
    path: "my-account",
    element: <MyAccount />
  },
  {
    path: "change-password",
    element: <ChangePassword />
  },
  
  {
    path: "privacy-policy",
    element: <PrivacyPolicy />
  },
  {
    path: "learn-more",
    element: <LearnMore />
  },
  {
    path: "pricing",
    element: <Pricing />
  }  
]);


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RecoilRoot>
      <RouterProvider router={router} /> 
    </RecoilRoot>
  </React.StrictMode>,
)
