const db = require('../../../db');

// Controlador para guardar un usuario en la tabla de usuarios
async function guardarUsuario(req, res) {
    const { nombres, apellidos, cedula, email, password, direccion, ciudad, rol, estado } = req.body;

    try {
        const query = 'INSERT INTO usuarios (nombres, apellidos, cedula, email, password, direccion, ciudad, rol, estado) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)';
        const values = [nombres, apellidos, cedula, email, password, direccion, ciudad, rol, estado];
        db.query(query, values, (err, result) => {
            if (err) {
                console.error('Error al guardar el usuario:', error);
                res.status(500).json({ error: 'Error interno del servidor' });
                return;
            }
            res.status(201).json(result);
        });
    } catch (error) {
        console.error('Error al guardar el usuario:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
}

// Controlador para obtener todos los usuarios
async function obtenerUsuarios(req, res) {
    try {
        const query = 'SELECT * FROM usuarios';
        db.query(query, (err, result) => {
            if (err) {
                console.error('Error al obtener los usuarios:', err);
                res.status(500).json({ error: 'Error interno del servidor' });
                return;
            }
            res.status(200).json(result);
        });
    } catch (error) {
        console.error('Error al obtener los usuarios:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
}

module.exports = {
    guardarUsuario,
    obtenerUsuarios
};


