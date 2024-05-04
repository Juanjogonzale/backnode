const db = require('../../../db');
const multer = require('multer');
const path = require('path');


const DetallesPedido = require('../models/detallesPedido'); // Importar el modelo de detalles de pedido

// Función para obtener los detalles de un pedido específico
exports.obtenerDetallesPedido = async (req, res) => {
    const { idPedido } = req.params;

    try {
        const detallesPedido = await DetallesPedido.find({ pedido: idPedido });
        res.json(detallesPedido);
    } catch (error) {
        res.status(500).json({ error: 'Hubo un error al obtener los detalles del pedido' });
    }
};

// Función para crear detalles de pedido
exports.crearDetallesPedido = async (req, res) => {
    const { pedido, articulo, cantidad } = req.body;

    try {
        const nuevoDetallesPedido = new DetallesPedido({ pedido, articulo, cantidad });
        await nuevoDetallesPedido.save();
        res.json({ mensaje: 'Detalles de pedido creados exitosamente' });
    } catch (error) {
        res.status(500).json({ error: 'Hubo un error al crear los detalles del pedido' });
    }
};

// Función para actualizar detalles de pedido
exports.actualizarDetallesPedido = async (req, res) => {
    const { id } = req.params;
    const { cantidad } = req.body;

    try {
        await DetallesPedido.findByIdAndUpdate(id, { cantidad });
        res.json({ mensaje: 'Detalles de pedido actualizados exitosamente' });
    } catch (error) {
        res.status(500).json({ error: 'Hubo un error al actualizar los detalles del pedido' });
    }
};

// Función para eliminar detalles de pedido
exports.eliminarDetallesPedido = async (req, res) => {
    const { id } = req.params;

    try {
        await DetallesPedido.findByIdAndDelete(id);
        res.json({ mensaje: 'Detalles de pedido eliminados exitosamente' });
    } catch (error) {
        res.status(500).json({ error: 'Hubo un error al eliminar los detalles del pedido' });
    }
};
