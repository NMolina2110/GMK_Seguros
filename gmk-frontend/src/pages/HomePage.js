// src/pages/HomePage.js

import React from "react";
import "../styles/HomePage.css"; // ✅ Importa el CSS
import { useNavigate } from "react-router-dom"; // ✅ Para navegar

const HomePage = () => {
  const navigate = useNavigate(); // Hook para navegación

  return (
    <div className="home-container">
      {/* ✅ Mostrar imagen del logo desde public/images */}
      <img src="/images/logo2.jpg" alt="Logo GMK Seguros" className="logo" />

      <h1 className="welcome-text">Bienvenidos a GMK Seguros</h1>

      <div className="button-group">
        <button className="home-button" onClick={() => navigate("/login")}>
          Iniciar sesión
        </button>
        <button className="home-button" onClick={() => navigate("/register")}>
          Registrarse
        </button>
      </div>
    </div>
  );
};

export default HomePage;
