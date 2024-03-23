const db = require('../../../db');

async function guardarArticulo(req, res){
    const {nombre, descripcion, precio, stock, disponible} = req.body;

    try {
        const query = 'INSER INTO articulos (nombre, descripcion, precio, stock, disponible) VALUES ("Memoria RAM DDR4 16GB", "Memoria RAM DDR4 de 16GB para mejorar el rendimiento de tu computadora", 170000, 10, 1) RETURNING *';
        const values = [nombre, descripcion, precio, stock, disponible];
        const result = await db.query(query, values);
    
        res.status(200).json(result.rows);
    } catch (error) {
        console.error('Error al guardar el articulo: ', error);
        res.status(500).json({error: 'Error interno del servidor'});
    }
}

async function obtenerArticulos(req, res){
    try {
        const query = 'SELECT * FROM articulos';
        const result = await db.query(query);

        res.status(200).json(result.rows);
    } catch (error) {
        console.error('Error al obtener los articulos: ', error);
        res.status(500).json({error: 'Error interno del servidor'});
    }
}

module.exports = {
    guardarArticulo,
    obtenerArticulos,
};