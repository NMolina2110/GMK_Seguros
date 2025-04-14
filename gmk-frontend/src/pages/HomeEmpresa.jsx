// src/pages/HomeEmpresa.jsx
import React from "react";
import "../styles/Empresa.css";  
import { Link } from "react-router-dom";
import logo from "../assets/logo2.jpg";
import seguroFamilia from "../assets/segurofamilia.jpg";
import seguroMascota from "../assets/seguromascota.jpg";
import seguroVehiculo from "../assets/segurovehiculo.jpg";
import aliados from "../assets/aliados.png";

function HomeEmpresa() {
  return (
    <div>
      {/* NAVBAR */}
      <header className="navbar">
        <div className="logo-container">
          <img src={logo} alt="Logo GMK" className="logo-img" />
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
          <button className="btn-cerrar" onClick={() => window.location.href = "/"}>Cerrar sesión</button>
        </nav>
      </header>

      {/* CONTENIDO PRINCIPAL */}
      <main className="contenido-principal">
        {/* SECCIÓN: ACERCA DE NOSOTROS */}
        <section className="seccion">
          <h2>Acerca de Nosotros</h2>
          <p>
            En GMK Seguros estamos comprometidos con brindar tranquilidad y respaldo
            a nuestros clientes.

            Ofrecemos soluciones integrales para proteger lo más valioso:
            tu familia, tus mascotas, tu movilidad y tu futuro.
          </p>
          <div className="bloque-mv">
  <h3>🎯 Misión</h3>
  <p>Proteger a nuestros asegurados con responsabilidad, ética y compromiso.</p>
</div>
<div className="bloque-mv">
  <h3>🚀 Visión</h3>
  <p>Ser líderes en seguros personalizados a nivel nacional para el 2030.</p>
</div>
        </section>

        {/* SECCIÓN: SERVICIOS */}
        <section className="seccion">
          <h2>Servicios</h2>

          <h3>Líneas personales</h3>
          <p>El mejor respaldo para tu tranquilidad y la de tu familia:</p>
          <ul>
            <li>Seguros de Vida: Enfermedades graves, incapacidad, accidentes personales.</li>
          </ul>
          <img src={seguroFamilia} alt="Seguro Familia" className="imagen-servicio" />

          <ul>
            <li>Seguros de Mascotas: Vacunas, hospitalización, daños a terceros.</li>
          </ul>
          <img src={seguroMascota} alt="Seguro Mascotas" className="imagen-servicio" />

          <h3>Línea de Movilidad</h3>
          <p>Tu mejor respaldo en el camino:</p>
          <ul>
            <li>Seguro todo riesgo para vehículos, motos y pesados: pérdida total, asistencia y más.</li>
            <li>Responsabilidad Civil para vehículos públicos.</li>
          </ul>
          <img src={seguroVehiculo} alt="Seguro Vehículo" className="imagen-servicio" />
        </section>

        {/* SECCIÓN: ALIADOS */}
        <section className="seccion">
          <h2>Aliados</h2>
          <p>Conoce nuestras alianzas estratégicas con compañías aseguradoras líderes:</p>
          <img src={aliados} alt="Aliados GMK" className="imagen-aliados" />
        </section>
      </main>
    </div>
  );
}

export default HomeEmpresa;
