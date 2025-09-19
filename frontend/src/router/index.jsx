import { createBrowserRouter } from "react-router-dom";
import App from "../App.jsx";
import Login from "../pages/Login.jsx";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import Home from "../pages/Home.jsx";
import Register from "../pages/Register.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <Home /> },
      {
        path: "login",
        element: (
        //   <PublicRoute>
            <Login />
        //   </PublicRoute>
        ),
      },
      {
        path: "register",
        element: (
        //   <PublicRoute>
            <Register />
        //   </PublicRoute>
        ),
      },
    ],
  },
  
]);

export default router;
