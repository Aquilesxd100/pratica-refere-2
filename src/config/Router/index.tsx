import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Criminals from "../../pages/Criminals";
import Login from "../../pages/Login";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  { path: "/criminals", element: <Criminals /> },
]);

const RoutesApp = () => {
  return <RouterProvider router={router} />;
};

export default RoutesApp;
