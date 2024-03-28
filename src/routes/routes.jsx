import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import {
  About,
  Contact,
  Destination,
  Login,
  Register,
  DestinationDetail,
  DestinationCycle,
} from "../pages";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <div>404</div>,
    children: [
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/destinaion",
        element: <Destination />,
      },
      {
        path: "/destinationDetail",
        element: <DestinationDetail />,
      },
      {
        path: "/destinationCycle",
        element: <DestinationCycle />,
      },
    ],
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "register",
    element: <Register />,
  },
]);
