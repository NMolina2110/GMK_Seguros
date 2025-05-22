const express = require('express');
const cors = require('cors'); 
const app = express();
const port = 3001;

// Permite recibir JSON
app.use(cors());               
app.use(express.json());       


// Importar rutas
const usuariosRoutes = require('./routes/usuarios');
const segurosRoutes = require('./routes/seguros');
const contactoRoutes = require('./routes/contacto');

// Usar rutas
app.use('/api/usuarios', usuariosRoutes);
app.use('/api/seguros', segurosRoutes);
app.use('/api/contacto', contactoRoutes);

// Ruta raíz
app.get('/', (req, res) => {
  res.send('¡Bienvenido a la API GMK Seguros!');
});

// Iniciar servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
