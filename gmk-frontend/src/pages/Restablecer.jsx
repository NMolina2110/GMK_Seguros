// src/pages/Restablecer.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo2.jpg";
import "../styles/Login.css";

const Restablecer = () => {
  const [correo, setCorreo] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validación básica
    if (!correo.trim()) {
      setError("Por favor, ingresa tu correo electrónico.");
      setMensaje("");
      return;
    }

    try {
      //Petición al backend
      const response = await fetch("http://localhost:3001/api/usuarios/restablecer", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ correo })
      });

      if (response.ok) {
        setMensaje("✅ Se ha enviado un enlace de recuperación a tu correo.");
        setError("");
        setCorreo("");
      } else {
        const errorData = await response.json();
        setError(`❌ ${errorData.error || "No se pudo enviar el enlace."}`);
        setMensaje("");
      }
    } catch (err) {
      console.error("Error de red:", err);
      setError("❌ Error al conectar con el servidor.");
      setMensaje("");
    }
  };

  return (
    <main className="login-page">
      <div className="form-container">
        <img src={logo} alt="Logo GMK Seguros" className="logo" />
        <h2>Restablecer Contraseña</h2>

        <form className="login-form" onSubmit={handleSubmit}>
          <label>
            Ingresa tu correo electrónico:
            <input
              type="email"
              name="correo"
              value={correo}
              onChange={(e) => setCorreo(e.target.value)}
              required
            />
          </label>

          <button type="submit" className="boton">Enviar enlace de recuperación</button>
          <Link to="/login" className="boton">Volver al inicio de sesión</Link>
        </form>

        {/* Mensajes de estado */}
        {mensaje && <p style={{ color: "green", marginTop: "1rem" }}>{mensaje}</p>}
        {error && <p style={{ color: "red", marginTop: "1rem" }}>{error}</p>}
      </div>
    </main>
  );
};

export default Restablecer;
