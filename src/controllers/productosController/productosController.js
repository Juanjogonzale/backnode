const express = require('express');
const router = express.Router(); // Crea un router de Express

const db = require('../../../db');
const multer = require('multer');
const path = require('path');

// Configuración de multer para almacenar las imágenes
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '../../img')); // Ruta completa para la carpeta de imágenes
      },
    filename: function (req, file, cb) {
      cb(null, Date.now() + '-' + file.originalname); // Nombre único para la imagen
    }
  });
  
  const upload = multer({ storage: storage });

  // Ruta para guardar un producto, utilizando el middleware de multer para manejar la carga de archivos
router.post('/registrarProductos', upload.single('imagen'), guardarProductos);

// Controlador para guardar un producto en la base de datos
async function guardarProductos(req, res) {
    const { nombre, descripcion, precio, stock } = req.body;


    try {
        // Verificar si se han proporcionado todos los datos necesarios
        if (!nombre || !descripcion || !precio || !stock || !req.file) {
            return res.status(400).json({ error: 'Por favor, proporcione todos los datos requeridos, incluida la imagen' });
        }

        // Imprimir el valor de req.file para verificar la ruta de la imagen
        console.log('Ruta de la imagen:', req.file.path);

        const imagen = req.file.path; // Ruta de la imagen en el servidor
        

        // Insertar el producto en la base de datos junto con la ruta de la imagen
        const query = 'INSERT INTO productos (nombre, descripcion, precio, stock, imagen) VALUES (?, ?, ?, ?, ?)';
        const values = [nombre, descripcion, precio, stock, imagen];
        await db.promise().query(query, values);

        // Si no hay errores, enviar una respuesta exitosa
        console.log('Producto guardado exitosamente en el backend');
        res.status(201).json({ message: 'Producto guardado exitosamente' });
    } catch (error) {
        console.error('Error al guardar el producto:', error);
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

