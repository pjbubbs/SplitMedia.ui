import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Root from './routes/root';
import ErrorPage from './error-page';
import AboutUs from './routes/aboutUs';
import { RecoilRoot } from 'recoil';

import './App.css'
import './css/iconfont.css'
import './css/slick/slick.css'
import './css/slick/slick-theme.css'
import './css/font-awesome.min.css'
import './css/jquery.fancybox.css'
import './css/bootstrap.css'
import './css/bootstrap.min.css'
import './css/magnific-popup.css'
import './css/plugins.css'
/*
import './css/style.css'
*/
import './css/responsive.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
  },
  {
    path: "about-us",
    element: <AboutUs />,
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RecoilRoot>
      <RouterProvider router={router} /> 
    </RecoilRoot>
  </React.StrictMode>,
)
