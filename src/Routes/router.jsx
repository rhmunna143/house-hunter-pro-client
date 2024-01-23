import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../Layouts/RootLayout";
import HomePage from "../Pages/HomePage";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import BlogPage from "../Pages/Blog/BlogPage";
import DashLayout from "../Layouts/DashLayout";
import DashHome from "../Pages/Dashboard/Home/DashHome";

const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        children: [
            {
                path: "/",
                element: <HomePage />
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
                path: "/blogs",
                element: <BlogPage />
            }

        ]
    },

    {
        path: "dashboard",
        element: <DashLayout />,
        children: [
            {
                path: "home",
                element: <DashHome />
            }
        ]
    }
])

export default router;