import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import { About, Contact, DestinationDetails, Home, Login, Register } from "../pages";



export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        errorElement: <div>404</div>,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "contact",
                element: <Contact />
            },
            {
                path: "destination",
                element: <DestinationDetails />
            }
        ]
    },
    {
        path: "login",
        element: <Login />
    },
    {
        path: "register",
        element: <Register />
    }
]);
