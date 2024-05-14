const db = require('../../../db');
const multer = require('multer');
const path = require('path');

const Usuario = require('../components/usuario'); // Importar el modelo de usuario
const Articulo = require('../models/articulo'); // Asegúrate de que esta ruta sea correcta
const Factura = require('../models/factura');   // Asegúrate de que esta ruta sea correcta


// Función para generar una nueva factura
exports.generarFactura = async (req, res) => {
    const { usuarioId, detallesCompra } = req.body;

    try {
        // Calculamos el total de la factura sumando los precios de los artículos
        let totalFactura = 0;
        for (const detalle of detallesCompra) {
            const articulo = await Articulo.findById(detalle.articulo);
            totalFactura += detalle.cantidad * articulo.precio;

            // Puedes agregar más información del artículo al detalle de la factura si lo deseas
            detalle.nombre = articulo.nombre;
            detalle.descripcion = articulo.descripcion;
            detalle.precioUnitario = articulo.precio;
            // Agregar más campos si es necesario
        }

        const nuevaFactura = new Factura({
            usuario: usuarioId,
            articulos: detallesCompra,
            total: totalFactura,
            // Otros campos de la factura según sea necesario
        });
        await nuevaFactura.save();

        res.json({ mensaje: 'Factura generada exitosamente' });
    } catch (error) {
        res.status(500).json({ error: 'Hubo un error al generar la factura' });
    }
};