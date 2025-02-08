import React from "react";
import logo_incon from "../assets/Logo.png";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between h-80 bg-black text-white px-16 mt-3">
      <div className="flex flex-col items-center md:items-start mb-6 md:mb-0">
        <img src={logo_incon} alt="Logo Icon" className="w-16 h-16 mb-4" />
        <Link to="https://protfolio-shailesh-full-stack-developer.vercel.app/">
          <h1 className="text-lg font-semibold">Developed by Shailesh Kale</h1>
        </Link>
      </div>
      <div className="flex flex-col items-center md:items-start">
        <h2 className="text-lg font-semibold mb-4">Quick Links</h2>
        <ul className="flex flex-col gap-2">
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
            <Link to="/events" className="hover:underline">
              Events
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:underline">
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
      <div className="flex flex-col items-center md:items-start">
        <h2 className="text-lg font-semibold mb-4">Connect with Me</h2>
        <ul className="flex flex-col gap-2">
          <li>
            <Link
              to="https://protfolio-shailesh-full-stack-developer.vercel.app/"
              className="hover:underline">
              Shailesh Kale Portfolio
            </Link>
          </li>
          <li>
            <Link
              to="https://github.com/Shaileshkale17"
              className="hover:underline">
              GitHub
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
