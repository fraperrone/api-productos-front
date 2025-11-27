// src/components/ProtectedRoute.jsx
import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const ProtectedRoute = ({ element, roles = [] }) => {
  const { user } = useAuth();
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // si hay roles definidos y el rol del usuario no está en la lista, bloqueamos
  if (roles.length > 0 && !roles.includes(user.rol)) {
    return <h3>Acceso denegado</h3>; // o Navigate a otra página
  }

  return element;
};

export default ProtectedRoute;