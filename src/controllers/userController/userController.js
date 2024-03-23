// userController.js

const db = require('../../../db');

// Controlador para guardar un usuario en la tabla user
async function guardarUsuario(req, res) {
  const { nombre, correo, password } = req.body;

  try {
    const query = 'INSERT INTO users (nombre, correo, password) VALUES ($1, $2, $3) RETURNING *';
    const values = [nombre, correo, password];
    const result = await db.query(query, values);

    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error('Error al guardar el usuario:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
}

// Controlador para obtener todos los usuarios de la tabla user
async function obtenerUsuarios(req, res) {
  try {
    const query = 'SELECT * FROM users';
    const result = await db.query(query);

    res.status(200).json(result.rows);
  } catch (error) {
    console.error('Error al obtener los usuarios:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
}

module.exports = {
  guardarUsuario,
  obtenerUsuarios,
};
