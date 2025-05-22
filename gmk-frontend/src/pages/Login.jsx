// src/pages/Login.jsx
import "../styles/Login.css";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo2.jpg";

const Login = () => {
  const navigate = useNavigate();
  const [usuario, setUsuario] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [mensaje, setMensaje] = useState("");

  const handleSubmit = async (e) => {
  e.preventDefault();

  if (!usuario || !contrasena) {
    setMensaje("❌ Usuario y contraseña son obligatorios.");
    return;
  }

  try {
    const respuesta = await fetch("http://localhost:3001/api/usuarios/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        correo: usuario,
        contrasena: contrasena
      })
    });

    const data = await respuesta.json();

    if (respuesta.ok) {
      setMensaje("✅ Inicio de sesión exitoso.");

      // Guardar solo los datos del usuario
      localStorage.setItem("usuario", JSON.stringify(data.usuario));

      // Redirigir a página de usuario
      navigate("/homeusuario");
    } else {
      setMensaje(`❌ ${data.mensaje || "Credenciales incorrectas"}`);
    }

  } catch (error) {
    console.error("Error de red:", error);
    setMensaje("❌ No se pudo conectar con el servidor.");
  }
};

  return (
    <main className="login-page">
      <div className="form-container">
        <img src={logo} alt="GMK Seguros" className="logo" />
        <h2>Iniciar Sesión</h2>

        {mensaje && <p style={{ color: mensaje.startsWith("✅") ? "green" : "red" }}>{mensaje}</p>}

        <form className="login-form" onSubmit={handleSubmit}>
          <label>
            Usuario:
            <input
              type="text"
              name="usuario"
              value={usuario}
              onChange={(e) => setUsuario(e.target.value)}
              required
            />
          </label>

          <label>
            Contraseña:
            <input
              type="password"
              name="contrasena"
              value={contrasena}
              onChange={(e) => setContrasena(e.target.value)}
              required
            />
          </label>

          <div style={{ textAlign: "right" }}>
            <Link to="/restablecer" className="link">¿Olvidaste tu contraseña?</Link>
          </div>

          <div className="botones">
            <button type="submit" className="boton">Ingresar</button>
            <Link to="/" className="boton">Regresar</Link>
          </div>
        </form>
      </div>
    </main>
  );
};

export default Login;
