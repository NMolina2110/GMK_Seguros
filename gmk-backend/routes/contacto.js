const express = require('express');
const router = express.Router();

// Importa el controlador correcto
const contactoController = require('../controllers/contactoController');

// Ruta para enviar mensaje de contacto
router.post('/', contactoController.enviarMensaje);

module.exports = router;
