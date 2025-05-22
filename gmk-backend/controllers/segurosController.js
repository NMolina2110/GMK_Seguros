const db = require('../db');

exports.consultarSeguroVehiculo = (req, res) => {
  const placa = req.query.placa;

  if (!placa) {
    return res.status(400).json({ error: 'Falta el parámetro placa' });
  }

  const query = `
    SELECT 
      id, 
      placa, 
      aseguradora, 
      telefono, 
      numero_poliza AS numeroPoliza, 
      tipo_vehiculo AS tipoVehiculo,
      fecha_vencimiento AS vencimiento, 
      estado_pago AS estadoPago, 
      proximo_pago AS proximoPago, 
      usuario_id
    FROM seguros_vehiculo
    WHERE placa = ?
    LIMIT 1
  `;

  db.query(query, [placa], (err, results) => {
    if (err) {
      console.error('Error en la consulta a la base de datos:', err);
      return res.status(500).json({ error: 'Error en el servidor' });
    }

    if (results.length === 0) {
      return res.status(404).json({ error: 'No se encontró información con esa placa' });
    }

    res.json(results[0]);
  });
};

exports.consultarSeguroVida = (req, res) => {
  const documento = req.query.documento;

  if (!documento) {
    return res.status(400).json({ error: 'Falta el parámetro documento' });
  }

  const query = `
    SELECT 
      id, 
      documento_usuario AS documento, 
      aseguradora, 
      telefono, 
      numero_poliza AS numeroPoliza,
      fecha_vencimiento AS vencimiento, 
      estado_pago AS estadoPago, 
      proximo_pago AS proximoPago, 
      usuario_id
    FROM seguros_vida
    WHERE documento_usuario = ?
    LIMIT 1
  `;

  db.query(query, [documento], (err, results) => {
    if (err) {
      console.error('Error en la consulta a la base de datos:', err);
      return res.status(500).json({ error: 'Error en el servidor' });
    }

    if (results.length === 0) {
      return res.status(404).json({ error: 'No se encontró información con ese documento' });
    }

    res.json(results[0]);
  });
};
