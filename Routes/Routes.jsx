import React from "react";
import { createBrowserRouter } from "react-router";
import Root from "../Pages/Root/Root";
import Home from "../Pages/Home/Home";
import DocInfo from "../Pages/DocInfo/DocInfo";
import Appointments from "../Pages/Appointments/Appointments";
import Blogs from "../Pages/Blogs/Blogs";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";

import Loader from "../src/Components/Loader/Loader";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        path: "/",
        Component: Home,
        loader: () => fetch("../doctorsInfo.json"),
        hydrateFallbackElement: <Loader></Loader>,
      },
      {
        path: "docInfo/:id",
        Component: DocInfo,
        loader: () => fetch("../doctorsInfo.json"),
        hydrateFallbackElement: <Loader></Loader>,
      },
      {
        path: "appointments",
        Component: Appointments,
        hydrateFallbackElement: <Loader></Loader>,
      },
      {
        path: "/blogs",
        Component: Blogs,
        hydrateFallbackElement: <Loader></Loader>,
      },
    ],
  },
]);

export default router;
