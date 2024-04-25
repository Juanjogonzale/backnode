const mysql = require('mysql');

// Configuración para la conexión a la base de datos
const connection = mysql.createConnection({
  user: 'root',
  host: 'localhost',
  database: 'proyectopow',
  password: '',
  port: 3307
});

// Conectarse a la base de datos
connection.connect((err) => {
  if (err) {
    console.error('Error al conectar a la base de datos:', err);
    return;
  }
  console.log('Conexión establecida con la base de datos');

  // Consulta sencilla para probar la conexión
  connection.query('SELECT * FROM usuarios', (err, results) => {
    if (err) {
      console.error('Error al realizar la consulta:', err);
      return;
    }
    console.log('Resultados de la consulta:', results);
  });
});

// Exportar la conexión para su uso en otros archivos
module.exports = connection;
