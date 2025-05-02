const express = require('express');
const router = express.Router();
const usuariosController = require('../controllers/usuariosController');

// Registro de usuario
router.post('/registrar', usuariosController.registrarUsuario);
// Iniciar sesión
router.post('/login', usuariosController.login);
// Restablecer contraseña
router.post('/restablecer', usuariosController.restablecerPassword);
// Modificar usuario
router.put('/:id', usuariosController.modificarUsuario);

module.exports = router;
// Rtas para la gestión de usuarios API de GMK Seguros.

