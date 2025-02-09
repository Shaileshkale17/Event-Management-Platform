import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoute = ({ children, role }) => {
  const { user } = useSelector((state) => state.auth);
  console.log("user", user);
  if (!user) {
    return <Navigate to="/login" />;
  }

  if (role && user.user.role !== role) {
    return <Navigate to="/unauthorized" />;
  }

  return children;
};

export default ProtectedRoute;
