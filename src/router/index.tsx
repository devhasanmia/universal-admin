import { createBrowserRouter } from "react-router";
import User from "../pages/User";
import Dashboard from "../pages/Dashboard";
import AdminLayout from "../components/layouts/AdminLayout";
import NotFound from "../pages/NotFound";

const router = createBrowserRouter([
  {
    Component: AdminLayout,
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
  },
  {
    path: "*",
    Component: NotFound
  }
]);


export default router