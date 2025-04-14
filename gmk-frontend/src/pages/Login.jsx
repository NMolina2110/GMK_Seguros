// src/pages/Login.jsx

import "../styles/Login.css";
import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo2.jpg"; 

const Login = () => {
  return (
    <main className="login-page">
      <div className="form-container">
        <img src={logo} alt="GMK Seguros" className="logo" />
        <h2>Iniciar Sesión</h2>

        <form className="login-form">
          <label>
            Usuario:
            <input type="text" name="usuario" required />
          </label>

          <label>
            Contraseña:
            <input type="password" name="contrasena" required />
          </label>

          <label>
            Tipo de Vinculación:
            <select name="tipoVinculacion" required>
              <option value="">Selecciona una opción</option>
              <option value="cliente">Cliente</option>
              <option value="asesor">Asesor</option>
              <option value="administrador">Administrador</option>
            </select>
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
