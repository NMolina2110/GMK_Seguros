exports.consultarSeguroVehiculo = (req, res) => {
  const placa = req.query.placa;
  res.json({ message: `Consulta de seguro de vehículo con placa ${placa}` });
};

exports.consultarSeguroVida = (req, res) => {
  const documento = req.query.documento;
  res.json({ message: `Consulta de seguro de vida con documento ${documento}` });
};
