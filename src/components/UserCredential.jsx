// src/components/UserCredentials.jsx
import React from "react";
import { useAuth } from "../context/AuthContext";

const UserCredentials = () => {
  const { user } = useAuth();

  if (!user) {
    return null; // si no hay usuario logueado, no muestra nada
  }

  return (
    <div style={{ padding: "0.5rem", backgroundColor: "#f5f5f5", borderRadius: "4px" }}>
    
      <p><strong>Usuario Id:</strong> {user.id}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Rol:</strong> {user.rol}</p>
    </div>
  );
};

export default UserCredentials;