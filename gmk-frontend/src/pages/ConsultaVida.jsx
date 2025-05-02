import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import logo from "../assets/logo2.jpg";
import '../styles/Usuario.css'; // estilo

const ConsultaVida = () => {
  const [documento, setDocumento] = useState('');
  const [resultado, setResultado] = useState(null);
  const [error, setError] = useState('');

  const realizarConsulta = async () => {
    if (!documento.trim()) {
      setError('Por favor, ingresa un número de documento válido.');
      setResultado(null);
      return;
    }
  
    setError('');
  
    try {
      const response = await axios.get(`http://localhost:3001/api/seguros/vida?documento=${documento}`);
      setResultado(response.data);
    } catch (error) {
      console.error(error);
      setResultado(null);
      setError('No se encontró información con el documento ingresado.');
    }
  };
  
  return (
    <div>
          {/* LOGO centrado (opcional) */}
          <div className="logo-container" style={{ textAlign: 'center', marginTop: '1rem' }}>
            <img src={logo} alt="Logo" className="logo-img" style={{ width: '300px' }} />
          </div>
  
      <div className="main-content" style={{ textAlign: "center" }}>
        <h2>Consulta de Seguro de Vida</h2>
        <p>Ingresa el número de documento para consultar la póliza:</p>
  
        <div className="formulario-container">
          <input
            type="text"
            placeholder="Número de documento"
            value={documento}
            onChange={(e) => setDocumento(e.target.value)}
          />
  
          {error && <p className="error">{error}</p>}
  
          <div className="botones-container">
            <button className="boton-usuario" onClick={realizarConsulta}>
              Consultar
            </button>
  
            <Link to="/usuario">
              <button className="boton-usuario">
                Regresar al inicio
              </button>
            </Link>
          </div>
        </div>
  
        {/* Resultados simulados */}
        {resultado && (
          <div className="resultado consulta">
            <h3>Resultado de la Consulta</h3>
            <p><strong>Aseguradora:</strong> {resultado.aseguradora}</p>
            <p><strong>Teléfono:</strong> {resultado.telefono}</p>
            <p><strong>Número de Póliza:</strong> {resultado.numeroPoliza}</p>
            <p><strong>Fecha de Vencimiento:</strong> {resultado.vencimiento}</p>
            <p><strong>Estado de Pagos:</strong> {resultado.estadoPagos}</p>
            <p><strong>Próximo Pago:</strong> {resultado.proximoPago}</p>
            <p><strong>Beneficiario:</strong> {resultado.beneficiario}</p>
            <p><strong>Fecha de Inicio:</strong> {resultado.fechaInicio}</p>

          </div>
        )}
      </div>
    </div>
  );
}
export default ConsultaVida;