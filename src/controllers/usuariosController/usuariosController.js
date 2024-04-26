const db = require('../../../db');

// Controlador para guardar un usuario en la tabla de usuarios
async function guardarUsuario(req, res) {
    const { nombres, apellidos, cedula, email, password, direccion, ciudad, rol, estado } = req.body;

    try {
        const query = 'INSERT INTO usuarios (nombres, apellidos, cedula, email, password, direccion, ciudad, rol, estado) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)';
        const values = [nombres, apellidos, cedula, email, password, direccion, ciudad, rol, estado];
        
        // Ejecutar la consulta SQL
        const result = await db.query(query, values);
        //const [result, fields] = await db.execute(query, values);

        // Verificar si la inserción fue exitosa
        if (result.affectedRows > 0) {
            console.log('Usuario guardado exitosamente en el backend:', result.insertId);
            res.status(201).json({ message: 'Usuario guardado exitosamente', userId: result.insertId });
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
        console.log('Conexión establecida. Ejecutando consulta...');
        const [result, fields] = await db.promise().query('SELECT * FROM usuarios');
        //const query = 'SELECT * FROM usuarios';
        //const [result, fields] = await promise().execute(query);
        //const result = await db.execute(query);
        //const rows = result[0];

        console.log('datos entregados por la db', result);
    
        res.status(200).json(result);
    } catch (error) {
        console.error('Error al obtener los usuarios:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
}

module.exports = {
    guardarUsuario,
    obtenerUsuarios
};


