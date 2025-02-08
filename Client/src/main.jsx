import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Landing from "./Pages/Landing";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Events from "./Pages/Events";
import EventsInfo from "./Pages/EventsInfo";
import UserDashboard from "./Pages/UserDashboard";
import EmpDashboard from "./Pages/EmpDashboard";
import MainDashboard from "./Pages/MainDashboard";
import AddEvents from "./Pages/AddEvents";
import About from "./Pages/About";
import Contact_us_ from "./Pages/Contact_us_";
import EmployeeList from "./Pages/Test";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Landing />,
      },
      {
        path: "/employeeList",
        element: <EmployeeList />,
      },
      {
        path: "/event",
        element: <Events />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact_us_ />,
      },
      {
        path: "/event/:id",
        element: <EventsInfo />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/dashboard-user",
        element: <UserDashboard />,
      },
      {
        path: "/dashboard-emp",
        element: <EmpDashboard />,
      },
      {
        path: "/dashboard-main",
        element: <MainDashboard />,
      },
      {
        path: "/dashboard-main-add",
        element: <AddEvents />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
