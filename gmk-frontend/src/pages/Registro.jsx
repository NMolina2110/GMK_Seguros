// src/pages/Registro.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo2.jpg";
import "../styles/Login.css"; // Estilo


// Lista de ciudades de Colombia 
const ciudadesColombia = [
  "Bogotá", "Medellín", "Cali", "Barranquilla", "Cartagena", "Bucaramanga",
  "Cúcuta", "Pereira", "Manizales", "Ibagué", "Villavicencio"
];

const Registro = () => {
    const navigate = useNavigate();
  // Estado inicial de los datos del formulario
  const [datos, setDatos] = useState({
    nombres: "",
    apellidos: "",
    tipoDocumento: "",
    numeroIdentidad: "",
    fechaNacimiento: "",
    telefono: "",
    correo: "",
    ciudad: "",
    contrasena: "",
    confirmarContrasena: "",
    perfilUsuario: ""
  });

  const [mensaje, setMensaje] = useState("");

  // Función para manejar los cambios en los campos del formulario
  const handleChange = (e) => {
    const { name, value } = e.target;
    setDatos({ ...datos, [name]: value });
  };

  // Validar datos y simular el envío del formulario
  const handleModificar = () => {
    console.log("Modificar clickeado");
    setMensaje("🔄 Puedes modificar los datos arriba.");
  };

      // Validar y enviar los datos al backend
    const handleSubmit = async (e) => {
    e.preventDefault();

    // Validación: contraseñas deben coincidir
    if (datos.contrasena !== datos.confirmarContrasena) {
      setMensaje("❌ Las contraseñas no coinciden.");
      return;
    }

    // Validación: todos los campos deben estar llenos
    for (let campo in datos) {
      if (!datos[campo]) {
        setMensaje("❌ Por favor, completa todos los campos.");
        return;
      }
    }

    // Renombrar los campos para que coincidan con los esperados por el backend
    const datosBackend = {
      nombres: datos.nombres,
      apellidos: datos.apellidos,
      tipo_documento: datos.tipoDocumento,
      numero_identidad: datos.numeroIdentidad,
      fecha_nacimiento: datos.fechaNacimiento,
      telefono: datos.telefono,
      correo: datos.correo,
      ciudad: datos.ciudad,
      contrasena: datos.contrasena,
      perfil_usuario: datos.perfilUsuario
    };

    try {
      const respuesta = await fetch("http://localhost:3001/api/usuarios/registrar", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(datosBackend)
      });

      if (respuesta.ok) {
        setMensaje("✅ Registro exitoso.");
        setTimeout(() => {
          navigate("/login"); // Redirige después de 2 segundos
        }, 2000);
      } else {
        const errorData = await respuesta.json();
        setMensaje(`❌ Error al registrar: ${errorData.mensaje || "Error desconocido."}`);
      }
    } catch (error) {
      console.error("Error de red:", error);
      setMensaje("❌ Error al conectar con el servidor.");
    }
  };

  return (
    <main style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "2rem" }}>
      {/* Logo de GMK Seguros */}
      <img src={logo} alt="Logo GMK Seguros" style={{ height: "150px", marginBottom: "1rem" }} />

      <h2>Registro de Usuario</h2>

      {/* Mostrar mensaje de validación */}
      {mensaje && <p style={{ color: mensaje.startsWith("✅") ? "green" : "red" }}>{mensaje}</p>}

      {/* Formulario de Registro */}
      <form
        onSubmit={handleSubmit}
        className="formulario-registro"
        >
        <input name="nombres" type="text" placeholder="Nombres" value={datos.nombres} onChange={handleChange} required />
        <input name="apellidos" type="text" placeholder="Apellidos" value={datos.apellidos} onChange={handleChange} required />

        <select name="tipoDocumento" value={datos.tipoDocumento} onChange={handleChange} required>
          <option value="">Tipo de Documento</option>
          <option value="cc">Cédula de Ciudadanía</option>
          <option value="ce">Cédula de Extranjería</option>
          <option value="nit">NIT</option>
          <option value="pasaporte">Pasaporte</option>
        </select>

        <input name="numeroIdentidad" type="text" placeholder="Número de Identidad" value={datos.numeroIdentidad} onChange={handleChange} required />
        <input name="fechaNacimiento" type="date" value={datos.fechaNacimiento} onChange={handleChange} required />
        <input name="telefono" type="tel" placeholder="Teléfono" value={datos.telefono} onChange={handleChange} required />
        <input name="correo" type="email" placeholder="Correo Electrónico" value={datos.correo} onChange={handleChange} required />

        <select name="ciudad" value={datos.ciudad} onChange={handleChange} required>
          <option value="">Selecciona tu ciudad</option>
          {ciudadesColombia.map((ciudad) => (
            <option key={ciudad} value={ciudad}>{ciudad}</option>
          ))}
        </select>

        <input name="contrasena" type="password" placeholder="Contraseña" value={datos.contrasena} onChange={handleChange} required />
        <input name="confirmarContrasena" type="password" placeholder="Confirmar Contraseña" value={datos.confirmarContrasena} onChange={handleChange} required />

        <select name="perfilUsuario" value={datos.perfilUsuario} onChange={handleChange} required>
          <option value="">Perfil de Usuario</option>
          <option value="cliente">Cliente</option>
          <option value="beneficiario">Beneficiario</option>
          <option value="usuario">Usuario</option>
        </select>
          
    {/* Botones de acción */}

        <div className="botones-container">
  <button type="submit" className="boton">
    Registrar
  </button>
  <button type="button" onClick={handleModificar} className="boton">
    Modificar
  </button>
</div>

{/* Enlace para volver al inicio */}
<Link to="/" className="boton" style={{ marginTop: "1rem" }}>Volver al Inicio</Link>

      </form>
    </main>
  );
};

export default Registro;
