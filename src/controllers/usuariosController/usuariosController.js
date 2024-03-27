
const db = require('../../../db');
const { query } = require('express');

//controlador para guardar un usuario en la tabla  de usuarios
async function guardarUsuario(req, res) {
    const {nombres, apellidos, cedula, email, password, direccion, ciudad, rol, estado} = req.body;

    try {
        const query = 'INSERT INTO (nombres, apellidos, cedula, email, password, direccion, ciudad, rol, estado) values (nombres, apellidos, cedula, email, password, direccion, ciudad, rol, estado)';
        const values =  [nombres, apellidos, cedula, email, password, direccion, ciudad, rol, estado];
        const result = await db.query(query, values);

        res.status(201).json(result.rows[0]);
    } catch (error) {
        
    }
}


//controlador para obtener todos los usuarios
async function obtenerUsuarios(req, res){
    try {
        const query =  'SELECT * FROM "usuarios"';
        const result = await db.query(query);
        
        res.status(200).json(result.rows);
    } catch (error) {
        console.error('Error al obtener los usuarios:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
}

module.exports = {
    guardarUsuario,
    obtenerUsuarios
};
