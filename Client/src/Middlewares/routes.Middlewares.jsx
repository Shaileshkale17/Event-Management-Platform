import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoute = ({ children, role }) => {
  const { user } = useSelector((state) => state.auth);
  console.log("User object from Redux:", user);

  // Redirect to login if no user is logged in
  if (!user) {
    return <Navigate to="/login" />;
  }

  // Safely access role properties
  const userRole = user?.user?.roleas || user?.data?.role;
  console.log("User role:", userRole);

  // Redirect to unauthorized page if role doesn't match
  if (role && userRole !== role) {
    return <Navigate to="/unauthorized" />;
  }

  return children;
};

export default ProtectedRoute;
