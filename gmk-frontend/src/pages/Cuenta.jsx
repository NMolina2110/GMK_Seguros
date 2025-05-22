import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo2.jpg";
import '../styles/Usuario.css'; // Estilos

const Cuenta = () => {
  const navigate = useNavigate();
  const [datosUsuario, setDatosUsuario] = useState(null);

  useEffect(() => {
  const usuarioGuardado = localStorage.getItem("usuario");
  if (usuarioGuardado) {
    setDatosUsuario(JSON.parse(usuarioGuardado));
  } else {
    // Si no hay usuario logueado, redirigir a login
    navigate("/login");
  }
}, [navigate]);

if (!datosUsuario) {
  return <p>Cargando información...</p>;
}
 
  // Productos activos simulados
  const productosActivos = [
    "Póliza de Vida #VID-56789",
    "Seguro de Transporte #TRANS-78910"
  ];


  return (
    <div>
      {/* Logo centrado */}
      <div className="logo-container" style={{ textAlign: 'center', marginTop: '1rem' }}>
        <img src={logo} alt="Logo" className="logo-img" style={{ width: '300px' }} />
      </div>

      <div className="main-content">
        <h2>Mi Cuenta</h2>
        <p>Consulta tu información personal y productos activos:</p>

        <div className="resultado-consulta">
          <h3>Datos Personales</h3>
          <p><strong>Nombre:</strong> {datosUsuario.nombres}</p>
          <p><strong>Documento:</strong> {datosUsuario.numero_identidad}</p>
          <p><strong>Correo:</strong> {datosUsuario.correo}</p>
          <p><strong>Ciudad:</strong> {datosUsuario.ciudad}</p>
          <p><strong>Teléfono:</strong> {datosUsuario.telefono}</p>
          <p><strong>Perfil:</strong> {datosUsuario.perfil_usuario}</p>

        </div>

        <div className="resultado-consulta">
          <h3>Productos Activos</h3>
          <ul>
            {productosActivos.map((producto, index) => (
              <li key={index}>{producto}</li>
            ))}
          </ul>
        </div>

        <div className="botones-container">
        <button className="boton-usuario" onClick={() => navigate("/registro")}>
        Modificar Información
        </button>


          <Link to="/usuario">
            <button className="boton-usuario">
              Regresar al inicio
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cuenta;
