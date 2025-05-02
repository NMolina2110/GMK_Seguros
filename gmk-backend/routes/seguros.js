const express = require('express');
const router = express.Router();
const segurosController = require('../controllers/segurosController');

router.get('/vehiculo', segurosController.consultarSeguroVehiculo);
router.get('/vida', segurosController.consultarSeguroVida);

module.exports = router;
// Rutas gestión de seguros API de GMK Seguros.