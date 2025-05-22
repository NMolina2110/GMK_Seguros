// contactoController.js
const db = require('../db');

const contactoController = {
  enviarMensaje: (req, res) => {
    const { nombre, email, telefono, mensaje } = req.body;
    const correo = email;
    console.log("📥 Datos recibidos en enviarMensaje:", req.body); 

    // Validación básica
    if (!nombre || !correo || !telefono || !mensaje) {
      return res.status(400).json({ error: 'Faltan campos obligatorios' });
    }

    // Validación de correo electrónico
    const correoValido = /\S+@\S+\.\S+/.test(correo);
    if (!correoValido) {
      return res.status(400).json({ error: 'Correo no válido' });
    }


    const query = `
   INSERT INTO contacto (nombre, correo, telefono, mensaje)
   VALUES (?, ?, ?, ?)
   `;

    db.query(query, [nombre, correo, telefono, mensaje], (err, result) => {
      if (err) {
        console.error('Error al guardar el mensaje en la base de datos:', err);
        return res.status(500).json({ error: 'Error al guardar el mensaje' });
      }
      
      console.log("✅ Mensaje guardado con ticketId:", result.insertId); 
      
      res.status(200).json({
      mensaje: 'Mensaje recibido correctamente.',
      ticketId: result.insertId // Aquí está el "número de ticket"
      })

      });
    
  }
};

module.exports = contactoController;
