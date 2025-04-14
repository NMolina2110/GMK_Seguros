import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from "../assets/logo2.jpg";
import '../styles/Usuario.css'; // estilo

const ConsultaTransporte = () => {
  const [tipoBusqueda, setTipoBusqueda] = useState('placa');
  const [dato, setDato] = useState('');
  const [resultado, setResultado] = useState(null);
  const [mensajeError, setMensajeError] = useState('');

  const realizarConsulta = () => {
    if (!dato.trim()) {
      setMensajeError('Por favor ingresa el dato solicitado');
      setResultado(null);
      return;
    }

    // Simulación de datos de consulta
    if (tipoBusqueda === 'placa' && dato === 'ABC123') {
      setResultado({
        aseguradora: 'GMK Seguros',
        telefono: '3101234567',
        numeroPoliza: 'TR-998877',
        tipoVehiculo: 'Camión',
        vencimiento: '2025-07-15',
        estadoPagos: 'Al día',
        proximoPago: '2025-06-15'
      });
      setMensajeError('');
    } else if (tipoBusqueda === 'documento' && dato === '123456789') {
      setResultado({
        aseguradora: 'GMK Seguros',
        telefono: '3109876543',
        numeroPoliza: 'TR-112233',
        tipoVehiculo: 'Automóvil',
        vencimiento: '2025-10-01',
        estadoPagos: 'En mora',
        proximoPago: '2025-04-30'
      });
      setMensajeError('');
    } else {
      setResultado(null);
      setMensajeError('No se encontró información con los datos ingresados.');
    }
  };

  return (
    <div>
      {/* LOGO centrado (opcional) */}
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
  
            <Link to="/usuario">
              <button className="boton-usuario">Regresar al inicio</button>
            </Link>
          </div>
        </div>
  
        {mensajeError && (
          <p style={{ color: 'red', marginTop: '1rem' }}>{mensajeError}</p>
        )}
  
        {resultado && (
          <div className="resultado-consulta">
            <h2>Resultado:</h2>
            <p><strong>Aseguradora:</strong> {resultado.aseguradora}</p>
            <p><strong>Teléfono:</strong> {resultado.telefono}</p>
            <p><strong>Número de Póliza:</strong> {resultado.numeroPoliza}</p>
            <p><strong>Tipo de Vehículo:</strong> {resultado.tipoVehiculo}</p>
            <p><strong>Fecha de Vencimiento:</strong> {resultado.vencimiento}</p>
            <p><strong>Estado de Pagos:</strong> {resultado.estadoPagos}</p>
            <p><strong>Próximo Pago:</strong> {resultado.proximoPago}</p>
          </div>
        )}
  
        <br />
        <Link to="/usuario">
          <button className="boton-usuario">Regresar al inicio</button>
        </Link>
      </main>
    </div>
  );
}

export default ConsultaTransporte;
