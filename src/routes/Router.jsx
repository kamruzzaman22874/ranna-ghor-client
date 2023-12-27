import {
    createBrowserRouter,
} from "react-router-dom";
import MainLayouts from "../layouts/MainLayouts";
import Home from "../components/Home/Home/Home";
import Contact from "../components/Home/Home/Contact";
import Login from "../pages/shared/Login/Login";
import Register from "../pages/shared/Register/Register";
import Category from "../components/Category/Category";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayouts />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/register",
                element: <Register />
            },
            {
                path: "/category",
                element: <Category />
            }
        ]
    },
]);

