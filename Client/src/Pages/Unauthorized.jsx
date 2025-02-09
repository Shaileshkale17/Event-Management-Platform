import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
import "animate.css";

const Unauthorized = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center animate__animated animate__fadeIn">
        {/* Animated Icon */}
        <FontAwesomeIcon
          icon={faExclamationTriangle}
          className="text-yellow-500 text-6xl mb-4 animate__animated animate__tada animate__delay-1s"
        />
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Access Denied</h1>
        <p className="text-gray-600 mb-6">
          You do not have permission to view this page. Please check your access
          rights or contact the administrator.
        </p>
        {/* Redirect to Login */}
        <Link
          to="/login"
          className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow-md font-medium hover:bg-blue-700 transition-all animate__animated animate__pulse animate__infinite">
          Go to Login
        </Link>
      </div>
    </div>
  );
};

export default Unauthorized;
