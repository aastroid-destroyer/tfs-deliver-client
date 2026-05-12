import { createBrowserRouter } from "react-router";
import RootLayout from "../rootlayout/RootLayout";
import Home from "../components/Home/Home";
import Coverage from "../components/Coverage/Coverage";
import CoverageBG from "../components/Coverage/CoverageBG";
import AuthLayout from "../rootlayout/AuthLayout";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import BeaRider from "../pages/Rider/BeaRider";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout></RootLayout>,
        children: [
            {
                index: true,
                element: <Home></Home>
            },
            {
                path: 'coverage',
                loader: () => fetch('../warehouses.json'),
                element: <CoverageBG></CoverageBG>
            }
        ]
    },
    {
        path: '/',
        element: <AuthLayout></AuthLayout>,
        children: [
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'register',
                element: <Register></Register>
            },
            {
                path: 'be-a-rider',
                element: <PrivateRoute><BeaRider></BeaRider></PrivateRoute>
            }

        ]
    }
]);
