import React, { useState } from "react";
import logo from "../assets/Logo.png";
import { Link } from "react-router-dom";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="flex justify-center items-center min-h-screen bg-[#00000015] px-16">
      <div className="bg-white rounded-lg shadow-md flex overflow-hidden w-7xl ">
        <div className="hidden md:flex flex-1 flex-col justify-center items-center bg-blue-50 p-8">
          <h1 className="text-4xl font-semibold text-blue-600 mb-4">Welcome</h1>
          <p className="text-blue-500 text-center">
            Welcome back! Please login to access your account and explore.
          </p>
          <div className="mt-6 flex">
            <img src={logo} alt="Illustration" className="w-full" />
          </div>
        </div>
        <div className="flex-1 p-8">
          <h2 className="text-2xl font-bold text-blue-800 mb-2">Login</h2>
          <p className="text-sm text-gray-600 mb-6">Please login to continue</p>
          <form>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                placeholder="Enter your email"
                className="mt-1 block w-full px-4 py-2 border rounded-md text-sm shadow-sm focus:ring focus:ring-blue-200 focus:outline-none"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                id="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                placeholder="Enter your password"
                className="mt-1 block w-full px-4 py-2 border rounded-md text-sm shadow-sm focus:ring focus:ring-blue-200 focus:outline-none"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-lg text-sm font-medium shadow-md hover:bg-blue-700 transition">
              Login
            </button>
          </form>
          <p className="mt-7 text-blue-600 hover:text-blue-400">
            <Link to="/signup"> create your account</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
