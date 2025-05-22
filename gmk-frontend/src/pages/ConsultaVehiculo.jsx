import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from "../assets/logo2.jpg";
import '../styles/Usuario.css';


const ConsultaVehiculo = () => {
const navigate = useNavigate();

  // 🔐 Validación de sesión al cargar la página
    useEffect(() => {
    const usuario = localStorage.getItem("usuario");
    if (!usuario) {
      navigate("/login");
    }
  }, [navigate]);

  const [tipoBusqueda, setTipoBusqueda] = useState('placa');
  const [dato, setDato] = useState('');
  const [resultado, setResultado] = useState(null);
  const [mensajeError, setMensajeError] = useState('');

  const realizarConsulta = async () => {
    if (!dato.trim()) {
      setMensajeError('Por favor ingresa el dato solicitado');
      setResultado(null);
      return;
    }

    try {
      let url = '';

      if (tipoBusqueda === 'placa') {
        url = `http://localhost:3001/api/seguros/vehiculo?placa=${dato}`;
      } else {
        url = `http://localhost:3001/api/seguros/vida?documento=${dato}`;
      }

      const response = await fetch(url);
      if (!response.ok) {
        const errorData = await response.json();
        setMensajeError(errorData.error || 'No se encontró información');
        setResultado(null);
        return;
      }

      const data = await response.json();

      setResultado(data);
      setMensajeError('');
    } catch (error) {
      console.error('Error al consultar:', error);
      setMensajeError('Error al consultar el seguro');
      setResultado(null);
    }
  };

  return (
    <div>
      <div className="logo-container" style={{ textAlign: 'center', marginTop: '1rem' }}>
        <img src={logo} alt="Logo" className="logo-img" style={{ width: '300px' }} />
      </div>

      <main className="main-content">
        <h1>Consulta de Seguros de Transporte</h1>
        <p>Selecciona un tipo de búsqueda y digita el dato:</p>

        <div style={{ marginBottom: '1rem' }}>
          <label>
            <input
              type="radio"
              name="busqueda"
              value="placa"
              checked={tipoBusqueda === 'placa'}
              onChange={() => setTipoBusqueda('placa')}
            />{' '}
            Por Placa
          </label>{' '}
          <label>
            <input
              type="radio"
              name="busqueda"
              value="documento"
              checked={tipoBusqueda === 'documento'}
              onChange={() => setTipoBusqueda('documento')}
            />{' '}
            Por Documento
          </label>
        </div>

        <div className="formulario-container">
          <input
            type="text"
            placeholder={`Ingresa ${tipoBusqueda === 'placa' ? 'la placa' : 'el documento'}`}
            value={dato}
            onChange={(e) => setDato(e.target.value)}
          />

          <div className="botones-container">
            <button className="boton-usuario" onClick={realizarConsulta}>
              Consultar
            </button>
          </div>
        </div>

        {mensajeError && <p style={{ color: 'red', marginTop: '1rem' }}>{mensajeError}</p>}

        {resultado && tipoBusqueda === 'placa' && (
          <div className="resultado-consulta">
            <h2>Resultado Seguro Vehículo:</h2>
            <p><strong>Aseguradora:</strong> {resultado.aseguradora}</p>
            <p><strong>Teléfono:</strong> {resultado.telefono}</p>
            <p><strong>Número de Póliza:</strong> {resultado.numeroPoliza}</p>
            <p><strong>Tipo de Vehículo:</strong> {resultado.tipoVehiculo}</p>
            <p><strong>Fecha de Vencimiento:</strong> {resultado.vencimiento}</p>
            <p><strong>Estado de Pagos:</strong> {resultado.estadoPagos}</p>
            <p><strong>Próximo Pago:</strong> {resultado.proximoPago}</p>
          </div>
        )}

        {resultado && tipoBusqueda === 'documento' && (
          <div className="resultado-consulta">
            <h2>Resultado Seguro Vida:</h2>
            <p><strong>Aseguradora:</strong> {resultado.aseguradora}</p>
            <p><strong>Teléfono:</strong> {resultado.telefono}</p>
            <p><strong>Número de Póliza:</strong> {resultado.numeroPoliza}</p>
            <p><strong>Beneficiario:</strong> {resultado.beneficiario}</p>
            <p><strong>Fecha de Inicio:</strong> {resultado.fechaInicio}</p>
            <p><strong>Fecha de Vencimiento:</strong> {resultado.vencimiento}</p>
            <p><strong>Estado de Pagos:</strong> {resultado.estadoPagos}</p>
            <p><strong>Próximo Pago:</strong> {resultado.proximoPago}</p>
            <p><strong>Documento:</strong> {resultado.documento}</p>
          </div>
        )}

        <br />
        <Link to="/cuenta">
        <button className="boton-usuario">Regresar a la cuenta</button>
        </Link>

      </main>
    </div>
  );
};

export default ConsultaVehiculo;
