import { createBrowserRouter } from "react-router";
import RootLayout from "../rootlayout/RootLayout";
import Home from "../components/Home/Home";
import Coverage from "../components/Coverage/Coverage";
import CoverageBG from "../components/Coverage/CoverageBG";

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
]);
