// controllers/usuariosController.js
const db = require('../db');

// REGISTRO de usuario
exports.registrarUsuario = (req, res) => {
  const datos = req.body;
  console.log("📥 Datos recibidos en registrarUsuario:", datos);

  const sql = `
    INSERT INTO usuarios (
      nombres, apellidos, tipo_documento, numero_identidad, fecha_nacimiento,
      telefono, correo, ciudad, contrasena, perfil_usuario
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `;

  const valores = [
    datos.nombres,
    datos.apellidos,
    datos.tipo_documento,
    datos.numero_identidad,
    datos.fecha_nacimiento,
    datos.telefono,
    datos.correo,
    datos.ciudad,
    datos.contrasena,
    datos.perfil_usuario
  ];

  db.query(sql, valores, (err, resultado) => {
    if (err) {
      console.error("❌ Error al registrar usuario:", err);
      res.status(500).json({ mensaje: "Error al registrar usuario", error: err });
    } else {
      res.status(201).json({ mensaje: "✅ Usuario registrado correctamente", id: resultado.insertId });
    }
  });
};

// LOGIN
exports.login = (req, res) => {
  const { correo, contrasena } = req.body;

  const sql = 'SELECT * FROM usuarios WHERE correo = ?';

  db.query(sql, [correo], (err, results) => {
    if (err) {
      console.error("❌ Error al consultar usuario:", err);
      return res.status(500).json({ mensaje: "Error del servidor" });
    }

    if (results.length === 0) {
      return res.status(401).json({ mensaje: "❌ Usuario no encontrado" });
    }

    const usuario = results[0];

    if (usuario.contrasena !== contrasena) {
      return res.status(401).json({ mensaje: "❌ Contraseña incorrecta" });
    }

    // Opcional: eliminar contraseña antes de enviar
    delete usuario.contrasena;

    res.status(200).json({
      mensaje: "✅ Inicio de sesión exitoso",
      usuario
    });
  });
};

// RESTABLECER CONTRASEÑA
exports.restablecerPassword = (req, res) => {
  const { correo } = req.body;
  console.log("📨 Solicitud de restablecer contraseña para:", correo);

  // Simulación: aquí iría el proceso de envío de correo
  res.status(200).json({ mensaje: "🔑 Instrucciones enviadas al correo" });
};

// MODIFICAR usuario
exports.modificarUsuario = (req, res) => {
  const id = req.params.id;
  const nuevosDatos = req.body;

  const sql = `
    UPDATE usuarios SET
      nombres = ?, apellidos = ?, tipo_documento = ?, numero_identidad = ?,
      fecha_nacimiento = ?, telefono = ?, correo = ?, ciudad = ?,
      contrasena = ?, perfil_usuario = ?
    WHERE id = ?
  `;

  const valores = [
    nuevosDatos.nombres,
    nuevosDatos.apellidos,
    nuevosDatos.tipo_documento,
    nuevosDatos.numero_identidad,
    nuevosDatos.fecha_nacimiento,
    nuevosDatos.telefono,
    nuevosDatos.correo,
    nuevosDatos.ciudad,
    nuevosDatos.contrasena,
    nuevosDatos.perfil_usuario,
    id
  ];

  db.query(sql, valores, (err, resultado) => {
    if (err) {
      console.error("❌ Error al modificar usuario:", err);
      res.status(500).json({ mensaje: "Error al modificar usuario" });
    } else {
      res.status(200).json({ mensaje: `✅ Usuario ${id} modificado` });
    }
  });
};
