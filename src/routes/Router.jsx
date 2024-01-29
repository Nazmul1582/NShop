import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home";
import Main from "../layout/Main";
import SingleCategory from "../pages/singleCategory/SingleCategory";
import NotFound from "../pages/notFound/NotFound";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        errorElement: <NotFound />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/category/:categoryId",
                element: <SingleCategory />
            }
        ]
    }
])