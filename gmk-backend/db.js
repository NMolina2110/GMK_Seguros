const mysql = require('mysql2');

// Crear pool de conexión
const connection = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'Vicente302025%',
  database: 'gmkseguros',
  port: 3306
});

// Exportar la conexión
module.exports = connection;
