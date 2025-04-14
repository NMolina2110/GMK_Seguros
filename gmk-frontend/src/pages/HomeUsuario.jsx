import React from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo2.jpg";
import "../styles/Login.css";
import "../styles/Usuario.css";
import imagenCuenta from "../assets/imagencuenta.jpg";
import { FaUserShield } from "react-icons/fa";



const HomeUsuario = () => {
  const navigate = useNavigate();

  const cerrarSesion = () => {
    
    navigate("/");
  };

  return (
    <div>
      {/* NAVBAR */}
      <header className="navbar">
        <div className="logo-container">
          <img src={logo} alt="Logo" className="logo-img" />
        </div>
        <nav className="nav-links">
          <Link to="/homeempresa">Home</Link>
          <Link to="/cuenta">Cuenta</Link>
          <div className="dropdown">
          <button className="dropbtn">Consultar Seguros</button>
          <div className="dropdown-content">
          <Link to="/seguros/vida">Seguros de Vida</Link>
          <Link to="/seguros/transporte">Seguros de Transporte</Link>
          </div>
</div>
          <Link to="/contacto">Contacto</Link>
          <button className="btn-cerrar" onClick={cerrarSesion}>Cerrar sesión</button>
        </nav>
      </header>

      {/* CONTENIDO CENTRAL */}
      <main className="main-content">
        <h1>Bienvenido a tu portal de usuario</h1>
        <p>Desde aquí puedes gestionar tu cuenta, consultar seguros o contactar con soporte.</p>

        <h2 style={{ marginTop: '20px', color: '#5A189A' }}>Tu espacio personal en GMK Seguros</h2>

        <p style={{ marginTop: "1rem", fontStyle: "italic", color: "#6a1b9a" }}>
  “Tu tranquilidad es nuestra prioridad. Protege lo que más amas.”
</p>

<FaUserShield size={40} color="#6a1b9a" style={{ marginTop: "1.5rem" }} />

<img
  src={imagenCuenta}
  alt="Bienvenido a GMK Seguros"
  style={{
    width: "100%",
    maxWidth: "600px",
    marginTop: "2rem",
    borderRadius: "15px"
  }}
/>

<div style={{
  display: "flex",
  gap: "1rem",
  marginTop: "2rem",
  flexWrap: "wrap"
}}>
  <button onClick={() => navigate("/seguros")} className="boton-usuario">Consultar Seguros</button>
  <button onClick={() => navigate("/contacto")} className="boton-usuario">Contactar Asesor</button>
</div>

      </main>
    </div>
  );
};

export default HomeUsuario;
