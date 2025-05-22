import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import logo from "../assets/logo2.jpg";
import '../styles/Usuario.css';

const ConsultaVida = () => {
  const navigate = useNavigate();

  // 🔐 Validación de sesión al cargar la página
  useEffect(() => {
    const usuario = localStorage.getItem("usuario");
    if (!usuario) {
      navigate("/login");
    }
  }, [navigate]);

  const [documento, setDocumento] = useState('');
  const [resultado, setResultado] = useState(null);
  const [error, setError] = useState('');

  const realizarConsulta = async () => {
    if (!documento.trim()) {
      setError('Por favor, ingresa un número de documento válido.');
      setResultado(null);
      return;
    }

    try {
      const response = await axios.get(`http://localhost:3001/api/seguros/vida?documento=${documento}`);
      setResultado(response.data);
      setError('');
    } catch (err) {
      console.error('Error al consultar el seguro de vida:', err);
      setError('No se encontró información con ese documento o ocurrió un error.');
      setResultado(null);
    }
  };

  return (
    <div>
      {/* Logo */}
      <div className="logo-container" style={{ textAlign: 'center', marginTop: '1rem' }}>
        <img src={logo} alt="Logo" className="logo-img" style={{ width: '300px' }} />
      </div>

      <main className="main-content">
        <h1>Consulta de Seguro de Vida</h1>
        <p>Ingresa tu número de documento para consultar el seguro:</p>

        <div className="formulario-container">
          <input
            type="text"
            placeholder="Número de documento"
            value={documento}
            onChange={(e) => setDocumento(e.target.value)}
          />

          <div className="botones-container">
            <button className="boton-usuario" onClick={realizarConsulta}>
              Consultar
            </button>

            <Link to="/cuenta">
              <button className="boton-usuario">Regresar a la cuenta</button>
            </Link>
          </div>
        </div>

        {error && <p style={{ color: 'red', marginTop: '1rem' }}>{error}</p>}

        {resultado && (
          <div className="resultado-consulta">
            <h2>Resultado:</h2>
            <p><strong>Aseguradora:</strong> {resultado.aseguradora}</p>
            <p><strong>Teléfono:</strong> {resultado.telefono}</p>
            <p><strong>Número de Póliza:</strong> {resultado.numeroPoliza}</p>
            <p><strong>Nombre Asegurado:</strong> {resultado.nombreAsegurado}</p>
            <p><strong>Beneficiario:</strong> {resultado.beneficiario}</p>
            <p><strong>Fecha de Vencimiento:</strong> {resultado.vencimiento}</p>
            <p><strong>Estado de Pagos:</strong> {resultado.estadoPagos}</p>
            <p><strong>Próximo Pago:</strong> {resultado.proximoPago}</p>
          </div>
        )}
      </main>
    </div>
  );
};

export default ConsultaVida;
