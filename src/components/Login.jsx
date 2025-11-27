// src/pages/Login.jsx
import React, { useState } from "react";
import axios from "axios";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("franco@mail.com"); // dejamos por default para testo mas facil
  const [password, setPassword] = useState("adminpass");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8080/api/usuarios/login", {
        email,
        password,
      });
      // Supongamos que devuelve { id, nombre, rol }
      login(response.data);
      navigate("/"); // redirige al MainLayout
    } catch (error) {
      console.error("Error en login:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Correo" />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Contraseña" />
      <button type="submit">Ingresar</button>

      <h4>Credenciales de cliente:</h4>
      <p>Correo: juan@mail.com</p>
      <p>Contraseña: 1234</p>
    </form>
    
  );
};

export default Login;