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
import { Provider } from "react-redux";
import store from "./redux/store";
import AdminAndEmpLogin from "./Pages/AdminAndEmpLogin";
import ProtectedRoute from "./Middlewares/routes.Middlewares";
import Unauthorized from "./Pages/Unauthorized";
import ErrorPage from "./Pages/ErrorPage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
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
        element: (
          <ProtectedRoute role="User">
            <EventsInfo />
          </ProtectedRoute>
        ),
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
        element: (
          <ProtectedRoute role="employee">
            <EmpDashboard />
          </ProtectedRoute>
        ),
      },
      {
        path: "/employee-login",
        element: <AdminAndEmpLogin />,
      },
      {
        path: "/dashboard-main",
        element: (
          <ProtectedRoute role="admin">
            <MainDashboard />
          </ProtectedRoute>
        ),
      },
      {
        path: "/dashboard-main-add",
        element: (
          <ProtectedRoute role="admin">
            <AddEvents />
          </ProtectedRoute>
        ),
      },
      {
        path: "/Unauthorized",
        element: <Unauthorized />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
