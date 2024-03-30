import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import {
  About,
  Contact,
  Destination,
  Login,
  Register,
  DestinationCycle,
  DestinationDetails,
  Home,
} from "../pages";
import Error from "../pages/404";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/destination",
        element: <Destination />,
      },
      {
        path: "/destinationDetail",
        element: <DestinationDetails />,
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
