import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Components/Root/Root";
import Home from "./Components/Home/Home";
import DonationDetails from "./Components/DonationDetails/DonationDetails";
import Donation from "./Components/Donation/Donation";
import Statistics from "./Components/Statistics/Statistics";
import ErrorPage from "./Components/ErrorPage/ErrorPage";
import { Helmet, HelmetProvider } from "react-helmet-async";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("/donations.json"),
      },
      {
        path: "/details/:id",
        element: <DonationDetails />,
        loader: () => fetch("/donations.json"),
      },
      {
        path: "/donation",
        element: <Donation />,
        loader: () => fetch("/donations.json"),
      },
      {
        path: "/statistics",
        element: <Statistics />,
        loader: () => fetch("/donations.json"),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  </React.StrictMode>
);
