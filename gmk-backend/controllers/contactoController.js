// Controlador para contacto
const contactoController = {
  enviarMensaje: (req, res) => {
    const { nombre, correo, mensaje } = req.body;

    if (!nombre || !correo || !mensaje) {
      return res.status(400).json({ error: 'Faltan campos obligatorios' });
    }

    // Guardar en base de datos o enviar un correo
    res.json({
      message: 'Mensaje recibido',
      data: {
        nombre,
        correo,
        mensaje
      }
    });
  }
};

module.exports = contactoController;
