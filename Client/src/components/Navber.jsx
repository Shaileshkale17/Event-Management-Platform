import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo_icon from "../assets/Logo.png";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/slices/authSlice";
import { toast } from "react-toastify";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dispatch = useDispatch();
  const { isLoggedIn, user } = useSelector((state) => state.auth);
  const handleLogout = () => {
    dispatch(logout());
    toast.success("Logged out successfully");
    window.location.replace("/");
  };

  return (
    <header className="bg-black  text-gray-300 shadow-md">
      <div className="container mx-auto flex items-center justify-between px-4 py-3 md:py-4">
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/" className="flex flex-row items-center">
            <img src={logo_icon} alt="Logo" className="w-10 h-10" />

            <h1 className="ml-2 text-xl font-semibold hover:text-gray-400 text-gray-300">
              My Event
            </h1>
          </Link>
        </div>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link
            to="/"
            className="hover:text-gray-400 text-gray-300 hover:underline">
            Home
          </Link>
          <Link
            to="/about"
            className="hover:text-gray-400 text-gray-300 hover:underline">
            About
          </Link>
          <Link
            to="/event"
            className="hover:text-gray-400 text-gray-300 hover:underline">
            Event's
          </Link>
          <Link
            to="/contact"
            className="hover:text-gray-400 text-gray-300 hover:underline">
            Contact Us
          </Link>
          {user?.user?.role === "User" && (
            <Link
              to="/dashboard-user"
              className="hover:text-gray-400 text-gray-300 hover:underline">
              Dashboard
            </Link>
          )}
        </nav>

        {/* Authentication Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          {isLoggedIn ? (
            <button
              onClick={handleLogout}
              className="px-4 py-2 hover:text-gray-400 text-gray-300 rounded-lg hover:underline">
              Logout
            </button>
          ) : (
            <Link to="/login">
              <button className="px-4 py-2 hover:text-gray-400 text-gray-300 rounded-lg hover:underline">
                Sign In
              </button>
            </Link>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="block md:hidden focus:outline-none">
          {isMenuOpen ? (
            <X className="w-6 h-6 hover:text-gray-400 text-gray-300" />
          ) : (
            <Menu className="w-6 h-6 hover:text-gray-400 text-gray-300" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-700 text-white space-y-2 py-3 px-4">
          <Link to="/" className="block hover:text-blue-400 hover:underline">
            Home
          </Link>
          <Link
            to="/about"
            className="block hover:text-blue-400 hover:underline">
            About
          </Link>
          <Link
            to="/event"
            className="block hover:text-blue-400 hover:underline">
            Event's
          </Link>
          <Link
            to="/contact"
            className="block hover:text-blue-400 hover:underline">
            Contact Us
          </Link>
          {user?.role === "User" && (
            <Link
              to="/dashboard-user"
              className="block hover:text-blue-400 hover:underline">
              Dashboard
            </Link>
          )}
          {isLoggedIn ? (
            <button
              onClick={handleLogout}
              className="block w-full text-left px-4 py-2 hover:text-gray-400 text-gray-300 rounded-lg  hover:underline">
              Logout
            </button>
          ) : (
            <Link to="/login">
              <button className="block w-full text-left px-4 py-2 hover:text-gray-400 text-gray-300 rounded-lg hover:underline">
                Sign In
              </button>
            </Link>
          )}
        </div>
      )}
    </header>
  );
};

export default Navbar;
