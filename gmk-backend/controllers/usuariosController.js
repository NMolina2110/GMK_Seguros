exports.registrarUsuario = (req, res) => {
  const nuevoUsuario = req.body;
  res.json({ message: 'Usuario registrado correctamente', data: nuevoUsuario });
};

exports.login = (req, res) => {
  const { correo, contraseña } = req.body;
  res.json({ message: 'Inicio de sesión exitoso', correo });
};

exports.restablecerPassword = (req, res) => {
  const { correo, nuevaContraseña } = req.body;
  res.json({ message: 'Contraseña restablecida', correo });
};

exports.modificarUsuario = (req, res) => {
  const id = req.params.id;
  const nuevosDatos = req.body;
  res.json({ message: `Usuario ${id} modificado`, nuevosDatos });
};

  