const express = require('express');
const router = express.Router();
const usuariosController = require('../controllers/usuariosController');

router.post('/registrar', usuariosController.registrarUsuario);
router.post('/login', usuariosController.login);
router.post('/restablecer', usuariosController.restablecerPassword);
router.put('/:id', usuariosController.modificarUsuario);

module.exports = router;
// Este archivo define las rutas para la gestión de usuarios en la API de GMK Seguros.

