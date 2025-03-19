import { createBrowserRouter } from "react-router-dom";
import LearnMore from "../Pages/marketing/learnMore";

export const router = createBrowserRouter([
  { path: "learn-more", element: <LearnMore /> },
]);
