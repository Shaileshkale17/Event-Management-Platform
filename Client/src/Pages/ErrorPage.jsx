import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";
import "animate.css";

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center animate__animated animate__fadeIn">
        {/* Animated Icon */}
        <FontAwesomeIcon
          icon={faExclamationCircle}
          className="text-red-500 text-6xl mb-4 animate__animated animate__wobble animate__delay-1s"
        />
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          404 - Page Not Found
        </h1>
        <p className="text-gray-600 mb-6">
          The page you are looking for does not exist. It might have been moved
          or deleted.
        </p>
        {/* Redirect to Home */}
        <Link
          to="/"
          className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow-md font-medium hover:bg-blue-700 transition-all animate__animated animate__pulse animate__infinite">
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
