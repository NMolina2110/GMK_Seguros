const express = require('express');
const router = express.Router();
const segurosController = require('../controllers/segurosController');

router.get('/vehiculo', segurosController.consultarSeguroVehiculo);
router.get('/vida', segurosController.consultarSeguroVida);

module.exports = router;
// Este archivo define las rutas para la gestión de seguros en la API de GMK Seguros.