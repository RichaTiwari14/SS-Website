// src/components/ProtectedRoute.jsx
import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  // ✅ CORRECT - "access" token check karo
  const accessToken = localStorage.getItem("access");
  
  if (!accessToken) {
    // Token nahi hai toh login pe bhejo
    return <Navigate to="/login" replace />;
  }

  // Token hai toh dashboard dikhao
  return children;
};

export default ProtectedRoute;