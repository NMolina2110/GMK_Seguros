// src/components/Inicio.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo2.jpg'; // 

const Inicio = () => {
  return (
    <main style={{
      backgroundColor: '#ffffff',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem',
      textAlign: 'center'
    }}>
      <img
        src={logo}
        alt="Logo GMK Seguros"
        style={{ width: '700px', marginBottom: '1.5rem' }}
      />
      <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>
        Bienvenido a GMK Seguros
      </h1>
      <p style={{ marginBottom: '2rem', fontSize: '1.1rem' }}>
        Elige una opción para continuar:
      </p>

      <div style={{ display: 'flex', gap: '1.5rem' }}>
        <Link to="/login" className="boton">Iniciar Sesión</Link>
        <Link to="/registro" className="boton">Registrarse</Link>
      </div>
    </main>
  );
};

export default Inicio;
