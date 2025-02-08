import "./App.css";
import Navber from "./components/Navber";
import { Outlet, useLocation, useParams } from "react-router-dom";
import Footer from "./components/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  const path = useLocation().pathname;
  return (
    <div className="relative">
      {path == "/login" ||
      path == "/signup" ||
      path == "/Login" ||
      path == "/Signup" ? (
        <>
          <ToastContainer />
          <Outlet />
        </>
      ) : (
        <>
          <Navber />
          <ToastContainer />
          <Outlet />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
