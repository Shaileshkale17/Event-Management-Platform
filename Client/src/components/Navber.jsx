import React from "react";
import logo_icon from "../assets/Logo.png";
import { Link } from "react-router-dom";
const Navber = () => {
  return (
    <div className="absolute z-30 w-full px-16  mt-4">
      <nav className="flex flex-row justify-between border-white p-4 rounded-2xl bg-[#28475cac]  text-white">
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
        </ul>
        <div>
          <Link to="/login">
            <button>Sign In</button>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navber;
