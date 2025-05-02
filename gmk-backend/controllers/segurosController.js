exports.consultarSeguroVehiculo = (req, res) => {
  const placa = req.query.placa;
  if (placa === 'ABC123') {
    res.json({
      aseguradora: 'GMK Seguros',
      telefono: '3101234567',
      numeroPoliza: 'TR-998877',
      tipoVehiculo: 'Camión',
      vencimiento: '2025-07-15',
      estadoPagos: 'Al día',
      proximoPago: '2025-06-15'
    });
  } else {
    res.status(404).json({ error: 'No se encontró información con esa placa' });
  }
};


exports.consultarSeguroVida = (req, res) => {
  const documento = req.query.documento;
  res.json({ 
    aseguradora: 'GMK Seguros',
    telefono: '3112345678',
    numeroPoliza: 'VID-123456',
    beneficiario: 'Ana Pérez',
    fechaInicio: '2024-01-01',
    vencimiento: '2025-01-01',
    estadoPagos: 'Al día',
    proximoPago: '2024-12-01',
    documento: documento
  });
};
