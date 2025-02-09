import React from "react";
import logo_icon from "../assets/Logo.png";
import { Link, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/slices/authSlice";
import { toast } from "react-toastify";

const Navber = () => {
  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector((state) => state.auth);

  const data = useSelector((state) => state.auth);
  const handleLogout = () => {
    dispatch(logout());
    window.location.replace("/");
    toast.success("Logged out successfully"); // Notify the user
  };
  return (
    <div className="absolute z-30 w-full px-16 mt-4">
      <nav className="flex flex-row justify-between border-white p-4 rounded-2xl bg-[#28475cac] text-white">
        <div>
          <Link to="/">
            <img src={logo_icon} alt="Logoicon" className="w-7 h-7" />
          </Link>
        </div>

        <ul className="flex flex-row gap-6">
          <li>
            <Link to="/" className="hover:underline">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:underline">
              About
            </Link>
          </li>
          <li>
            <Link to="/event" className="hover:underline">
              Event's
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:underline">
              Contact us
            </Link>
          </li>
          {data?.user?.user?.role === "User" ? (
            <li>
              <Link to="/dashboard-user" className="hover:underline">
                Dashboard
              </Link>
            </li>
          ) : (
            ""
          )}
        </ul>
        <div>
          {isLoggedIn ? (
            <button className="cursor-pointer" onClick={handleLogout}>
              Logout
            </button>
          ) : (
            <Link to="/login">
              <button className="cursor-pointer">Sign In</button>
            </Link>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navber;
