// src/App.js
import './styles/global.css';
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Importar páginas
import Inicio from "./pages/Inicio";
import Login from "./pages/Login";
import Registro from "./pages/Registro";
import Restablecer from "./pages/Restablecer"; 
import Contacto from "./pages/Contacto";
import HomeUsuario from './pages/HomeUsuario';
import ConsultaVehiculo from './pages/ConsultaVehiculo';
import ConsultaVida from './pages/ConsultaVida';
import Cuenta from './pages/Cuenta';
import HomeEmpresa from "./pages/HomeEmpresa";




function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/restablecer" element={<Restablecer />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/homeusuario" element={<HomeUsuario />} />
        <Route path="/seguros/transporte" element={<ConsultaVehiculo />} />
        <Route path="/seguros/vida" element={<ConsultaVida />} />
        <Route path="/cuenta" element={<Cuenta />} />
        <Route path="/homeempresa" element={<HomeEmpresa />} />


      </Routes>
    </Router>
  );
}

export default App;
