
import { createBrowserRouter } from "react-router";

import Login from "./features/auth/pages/Login";
import Register from "./features/auth/pages/Register";
import Protected from "./features/auth/components/Protected";

import Home from "./features/interview/pages/Home";
import Interview from "./features/interview/pages/Interview";

// 404 Page
const NotFound = () => {
    return (
        <div>
            <h1>404 - Page Not Found</h1>
            <p>The page you are looking for does not exist.</p>
        </div>
    );
};

// Application Routes
export const router = createBrowserRouter([
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/register",
        element: <Register />
    },
    {
        path: "/",
        element: (
            <Protected>
                <Home />
            </Protected>
        )
    },
    {
        path: "/interview/:interviewId",
        element: (
            <Protected>
                <Interview />
            </Protected>
        )
    },
    {
        path: "*",
        element: <NotFound />
    }
]);
