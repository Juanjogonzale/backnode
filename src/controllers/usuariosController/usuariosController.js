const db = require('../../../db');

// Controlador para guardar un usuario en la tabla de usuarios
async function guardarUsuario(req, res) {
    const { nombres, apellidos, cedula, email, password, direccion, ciudad, rol, estado } = req.body;

    try {
        const query = 'INSERT INTO usuarios (nombres, apellidos, cedula, email, password, direccion, ciudad, rol, estado) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)';
        const values = [nombres, apellidos, cedula, email, password, direccion, ciudad, rol, estado];
        
        // Ejecutar la consulta SQL
        const result = await db.query(query, values);

        // Verificar si la inserción fue exitosa
        if (result.affectedRows > 0) {
            console.log('Usuario guardado exitosamente en el backend:', result.rows[0]);
            res.status(201).json({ message: 'Usuario guardado exitosamente', userId: result.rows[0]});
        } else {
            console.error('Error al guardar el usuario:', result.message);
            res.status(500).json({ error: 'Error interno del servidor' });
        }
    } catch (error) {
        console.error('Error al guardar el usuario:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
}



// Controlador para obtener todos los usuarios
async function obtenerUsuarios(req, res) {
    try {
        const query = 'SELECT * FROM usuarios';
        const result = await db.query(query);
        console.log("datos::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::",result);
    
        res.status(201).json(result);
      } catch (error) {
        console.error('Error al obtener los usuarios:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
      }
    }


module.exports = {
    guardarUsuario,
    obtenerUsuarios
};


