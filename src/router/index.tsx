import { createBrowserRouter } from "react-router";
import App from "../App";
import User from "../pages/User";
import Dashboard from "../pages/Dashboard";

const router = createBrowserRouter([
  {
    Component: App,
    path: "/",
    children: [
      {
        Component: Dashboard,
        path: "dashboard",
      },
      {
        Component: User,
        path: "users",
      }
    ]
  }
]);


export default router