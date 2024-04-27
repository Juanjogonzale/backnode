const db = require('../../../db');

// Controlador para guardar un usuario en la tabla de usuarios
async function guardarProductos(req, res) {
    const { nombre, descripcion, precio, stock, imagen } = req.body;

    try {
        const query = 'INSERT INTO productos (nombre, descripcion, precio, stock, imagen) VALUES (?, ?, ?, ?, ?)';
        const values = [nombre, descripcion, precio, stock, imagen];
        
        // Ejecutar la consulta SQL
        const [result, fields] = await db.execute(query, values);

        // Verificar si la inserción fue exitosa
        if (result.affectedRows > 0) {
            console.log('productos guardado exitosamente en el backend:', result.insertId);
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

// Controlador para obtener todos los productos
async function obtenerProductos(req, res) {
    try {
        console.log('Conexión establecida. Ejecutando consulta...');
        const [result, fields] = await db.promise().query('SELECT * FROM productos');
        
        console.log('datos entregados por la db', result);
    
        res.status(200).json(result);
    } catch (error) {
        console.error('Error al obtener los usuarios:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
}

//optener id producto
async function obtenerIdProductos(req, res) {
    const id = req.params.id;

    try {
        console.log('Conexión establecida. Ejecutando consulta para obtener detalles del artículo con ID:', id);
        const [result, fields] = await db.promise().query('SELECT * FROM productos WHERE idproductos = ?', [id]);
        
        if (result.length === 0) {
            console.log('No se encontró ningún artículo con el ID proporcionado:', id);
            return res.status(404).json({ error: 'Artículo no encontrado' });
        }
    
        console.log('Detalles del artículo entregados por la db:', result[0]);
        res.status(200).json(result[0]);
    } catch (error) {
        console.error('Error al obtener los detalles del artículo:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
}

module.exports = {
    guardarProductos,
    obtenerProductos,
    obtenerIdProductos
};

