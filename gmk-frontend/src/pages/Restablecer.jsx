// src/pages/Restablecer.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo2.jpg";
import "../styles/Login.css";

const Restablecer = () => {
  // Estado para mostrar mensaje de confirmación
  const [mensaje, setMensaje] = useState("");

  // Manejador del formulario
  const handleSubmit = (e) => {
    e.preventDefault(); // Evita que se recargue la página

    // Enviar el enlace (simulado por ahora)
    setMensaje("Se ha enviado un enlace de recuperación a tu correo.");
  };

  return (
    <main className="login-page">
      <div className="form-container">
        <img src={logo} alt="Logo GMK Seguros" className="logo" />
        <h2>Restablecer Contraseña</h2>

        <form className="login-form" onSubmit={handleSubmit}>
          <label>
            Ingresa tu usuario o correo:
            <input type="text" name="usuario" required />
          </label>

          <button type="submit" className="boton">Enviar enlace de recuperación</button>
          <Link to="/login" className="boton">Volver al inicio de sesión</Link>
        </form>

        {/* Mostrar mensaje solo si existe */}
        {mensaje && <p style={{ color: "green", marginTop: "1rem" }}>{mensaje}</p>}
      </div>
    </main>
  );
};

export default Restablecer;
