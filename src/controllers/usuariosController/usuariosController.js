const db = require('../../../db');

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