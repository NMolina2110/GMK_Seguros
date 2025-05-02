// src/pages/Contacto.jsx
import React, { useState } from 'react';
import "../styles/Usuario.css";
import logo from "../assets/logo2.jpg";

function Contacto() {
  const [formulario, setFormulario] = useState({
    nombre: '',
    email: '',
    telefono: '',
    mensaje: ''
  });

  const [estado, setEstado] = useState({
    mensaje: '',
    exito: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormulario({ ...formulario, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validación básica
    if (!formulario.nombre || !formulario.email || !formulario.telefono || !formulario.mensaje) {
      setEstado({ mensaje: 'Todos los campos son obligatorios.', exito: false });
      return;
    }

    setEstado({ mensaje: 'Enviando mensaje...', exito: null });
    
    try {
      const response = await fetch("http://localhost:3001/api/contacto", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formulario)
      });

      if (response.ok) {
        setEstado({ mensaje: 'Mensaje enviado con éxito.', exito: true });
        setFormulario({ nombre: '', email: '', telefono: '', mensaje: '' });
      } else {
        setEstado({ mensaje: 'Error al enviar el mensaje.', exito: false });
      }
    } catch (error) {
      console.error("Error:", error);
      setEstado({ mensaje: 'Error de conexión con el servidor.', exito: false });
    }
  };

  return (
    <div className="contacto-container">
      <header className="navbar">
        <div className="logo-container">
          <img src={logo} alt="Logo GMK" className="logo-img" />
        </div>
        <nav className="nav-links">
          <a href="/homeempresa">Home</a>
          <a href="/cuenta">Cuenta</a>
          <a href="/contacto">Contacto</a>
        </nav>
      </header>

      <main className="form-container">
  <h2>Contáctanos</h2>
  <form onSubmit={handleSubmit}>
    <div className="form-group">
      <label htmlFor="nombre">Nombre completo</label>
      <input
        type="text"
        name="nombre"
        id="nombre"
        value={formulario.nombre}
        onChange={handleChange}
      />
    </div>

    <div className="form-group">
      <label htmlFor="email">Correo electrónico</label>
      <input
        type="email"
        name="email"
        id="email"
        value={formulario.email}
        onChange={handleChange}
      />
    </div>

    <div className="form-group">
      <label htmlFor="telefono">Número de teléfono</label>
      <input
        type="tel"
        name="telefono"
        id="telefono"
        value={formulario.telefono}
        onChange={handleChange}
      />
    </div>

    <div className="form-group">
      <label htmlFor="mensaje">Mensaje</label>
      <textarea
        name="mensaje"
        id="mensaje"
        value={formulario.mensaje}
        onChange={handleChange}
      ></textarea>
    </div>

    <button type="submit">Enviar mensaje</button>
  </form>

  {estado.mensaje && (
    <p className={estado.exito ? "success-message" : "error-message"}>
      {estado.mensaje}
    </p>
  )}
</main>
    </div>
  );
}

export default Contacto;
