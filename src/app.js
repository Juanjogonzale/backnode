const express = require('express');
const config = require('./config');
const cors = require('cors');
//const detallesPedidosController = require('./controllers/detallespedidosController/detallespedidosController');
//const facturasController = require('./controllers/facturasController/facturasController');
//const pedidosController = require('./controllers/pedidosController/pedidosController');
const productosController = require('./controllers/productosController/productosController');
const usuariosController = require('./controllers/usuariosController/usuariosController');
//const transaccionesController = require('./controllers/transaccionesController/transaccionesController');
//const userController = require('./controllers/userController/userController');

const app = express();

/// Configuración
app.set('port', config.app.port);

app.use(cors());
// Middleware para permitir el análisis de cuerpo JSON
app.use(express.json());

// Rutas
app.get('/listaUsuarios', usuariosController.obtenerUsuarios);
app.post('/registrarUsuario', usuariosController.guardarUsuario);
app.get('/listaProductos', productosController.obtenerProductos);
app.get('/detalleArticulo/:id', productosController.obtenerIdProductos);
app.post('/registrarProductos', productosController.guardarProductos);
app.post('/login', usuariosController.loginUsuario);
app.post('/logout', usuariosController.logoutUsuario);

module.exports = app;
