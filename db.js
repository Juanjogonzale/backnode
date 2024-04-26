const mysql = require('mysql2'); // Importar mysql2 en lugar de mysql2/promise

// Configuración para la conexión a la base de datos
const connection = mysql.createConnection({
  user: 'root',
  host: 'localhost',
  database: 'proyectopow',
  password: '',
  port: 3306
});

// Utilizar async/await o .then() para realizar consultas
async function obtenerUsuarios() {
  try {
    // Realizar la consulta SQL para obtener los usuarios
    const [rows, fields] = await connection.promise().query('SELECT * FROM usuarios');
    console.log('Resultados de la consulta:', rows);
    return rows;
  } catch (error) {
    console.error('Error al realizar la consulta:', error);
    throw error;
  }
}

// Ejemplo de cómo utilizar la función obtenerUsuarios
obtenerUsuarios()
  .then(() => {
    console.log('Consulta completada exitosamente.');
  })
  .catch(error => {
    console.error('Error:', error);
  });

// Exportar la conexión para su uso en otros archivos
module.exports = connection;


// Conectarse a la base de datos
/*connection.connect((err) => {
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
module.exports = connection;*/