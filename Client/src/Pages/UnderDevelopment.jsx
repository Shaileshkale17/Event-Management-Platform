import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTools } from "@fortawesome/free-solid-svg-icons";
import "animate.css";

const UnderDevelopment = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-black">
      <div className=" flex flex-col items-center justify-center text-center animate__animated animate__fadeIn">
        {/* Animated Icon */}
        <FontAwesomeIcon
          icon={faTools}
          className="text-gray-300 text-6xl mb-4 animate__animated animate__wobble animate__delay-1s"
        />
        <h1 className="text-3xl font-bold text-gray-200 mb-4">
          Site Under Development
        </h1>
        <p className="text-gray-300 mb-6">
          This website is currently under development. Some pages may not be
          accessible yet. Please check back later.
        </p>

        <div className="flex space-x-4">
          <Link
            to="/"
            className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow-md font-medium hover:bg-blue-700 transition-all animate__animated animate__pulse animate__infinite">
            Home
          </Link>
          <Link
            to="/contact"
            className="bg-gray-600 text-white px-6 py-2 rounded-lg shadow-md font-medium hover:bg-gray-700 transition-all animate__animated animate__pulse animate__infinite">
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UnderDevelopment;
