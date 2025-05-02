exports.registrarUsuario = (req, res) => {
  const datos = req.body;
  console.log("📥 Datos recibidos en registrarUsuario:", datos);

  // Simulación de éxito
  res.status(201).json({ mensaje: "✅ Usuario registrado correctamente" });
};

exports.login = (req, res) => {
  const { correo, contrasena } = req.body;
  console.log("🟡 Intento de login:", correo);

  // Simulación de autenticación
  if (correo === "prueba@email.com" && contrasena === "1234") {
    res.status(200).json({ mensaje: "✅ Inicio de sesión exitoso" });
  } else {
    res.status(401).json({ mensaje: "❌ Credenciales inválidas" });
  }
};

exports.restablecerPassword = (req, res) => {
  const { correo } = req.body;
  console.log("📨 Solicitud de restablecer contraseña para:", correo);
  res.status(200).json({ mensaje: "🔑 Instrucciones enviadas al correo" });
};

exports.modificarUsuario = (req, res) => {
  const id = req.params.id;
  const nuevosDatos = req.body;
  console.log(`✏️ Modificar usuario con ID ${id}:`, nuevosDatos);
  res.status(200).json({ mensaje: `✅ Usuario ${id} modificado` });
};
