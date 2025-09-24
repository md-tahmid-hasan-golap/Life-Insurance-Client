import { createBrowserRouter } from "react-router";
import MainLayouts from "../Layouts/MainLayouts";
import Home from "../Components/Home/Home";
import Login from "../Components/Login/Login";
import Register from "../Components/Register/Register";
import AllPolicies from "../Components/AllPolicies/AllPolicies";
import Blog from "../Components/Blog/Blog";
import Dashboard from "../Components/Dashboard/Dashboard";
import PrivateRouter from "../Components/PrivateRouter/PrivateRouter";
import ErrorPage from "../Components/ErrorPage/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayouts,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/allPolicies",
        Component: AllPolicies,
      },
      {
        path: "/blog",
        Component: Blog,
      },
      {
        path: "/Login",
        Component: Login,
      },
      {
        path: "/register",
        Component: Register,
      },
      {
        path: "*",
        Component: ErrorPage,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRouter>
        <Dashboard></Dashboard>
      </PrivateRouter>
    ),
    children: [
      {
        path: "*",
        Component: ErrorPage,
      },
    ],
  },
]);

export default router;
