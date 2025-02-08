import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navber from "./components/Navber";
import { Outlet, useLocation, useParams } from "react-router-dom";
import Footer from "./components/Footer";

function App() {
  const [count, setCount] = useState(0);
  const path = useLocation().pathname;
  console.log(path);
  return (
    <div className="relative">
      {path == "/login" ||
      path == "/signup" ||
      path == "/Login" ||
      path == "/Signup" ? (
        <Outlet />
      ) : (
        <>
          <Navber />
          <Outlet />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
