const db = require('../../../db');

// Controlador para guardar un usuario en la tabla de usuarios
async function guardarUsuario(req, res) {
    const { nombres, apellidos, cedula, email, password, direccion, ciudad, rol, estado } = req.body;

    try {
        const query = 'INSERT INTO usuarios (nombres, apellidos, cedula, email, password, direccion, ciudad, rol, estado) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)';
        const values = [nombres, apellidos, cedula, email, password, direccion, ciudad, rol, estado];
        
        // Ejecutar la consulta SQL
        await db.promise().query(query, values);

        // Si no se produce ningún error, la inserción se considera exitosa
        console.log('Usuario guardado exitosamente en el backend', values);
        res.status(201).json({ message: 'Usuario guardado exitosamente' });
    } catch (error) {
        console.error('Error al guardar el usuario:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
}

// Controlador para obtener todos los usuarios
async function obtenerUsuarios(req, res) {
    try {
        const [result, fields] = await db.promise().query('SELECT * FROM usuarios');
        
        console.log('datos entregados por la db', result);
    
        res.status(200).json(result);
    } catch (error) {
        console.error('Error al obtener los usuarios:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
}


const jwt = require('jsonwebtoken');

async function loginUsuario(req, res) {
    console.log(req.body);
    const { email, password } = req.body;
    
    try {
        // Verificar si se proporcionaron correo y contraseña
        if (!email || !password) {
            return res.status(400).json({ error: 'Por favor, proporcione correo y contraseña' });
        }

        // Consultar la base de datos para encontrar el usuario con el correo proporcionado
        const [result, fields] = await db.promise().query('SELECT *  FROM usuarios WHERE email = ?', [email]);

        // Verificar si se encontró un usuario con el correo proporcionado
        if (result.length === 0) {
            console.log('Correo no registrado', result);
            return res.status(404).json({ error: 'Correo no registrado' });
        }

        // Verificar si la contraseña coincide
        const usuario = result[0];
        if (usuario.password !== password) {
            console.log('contraseña incorrecta', result);
            return res.status(401).json({ error: 'Contraseña incorrecta' });
        }

       // Si el correo y la contraseña son correctos, generar el token JWT
       const token = jwt.sign({ email: usuario.email, id: usuario.idusuarios }, 'secreto', { expiresIn: '1h' });
       console.log('token generado: ', token);

        // Enviar el token en la respuesta
        res.status(200).json({
            mensaje: 'Inicio de sesión exitoso',
            token: token
        });

        // Si el correo y la contraseña son correctos, enviar los datos del usuario
        /*res.status(200).json({
            mensaje: 'Inicio de sesión exitoso',
            usuario: {
                id: usuario.idusuarios,
                correo: usuario.email,
                nombres: usuario.nombres,
                apellidos: usuario.apellidos,
                cedula: usuario.cedula
            }
        });*/
        
    } catch (error) {
        console.log('Error al iniciar sesión:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
}

// Función para decodificar el token y obtener los datos del usuario
function obtenerDatosUsuario(token) {
    try {
    // Decodificar el token para obtener los datos del usuario
    const decoded = jwt.verify(token, 'secreto');
        
        // Supongamos que el token contiene los datos del usuario en forma de objeto
        const { email, id } = decoded;
    
        // Retornar los datos del usuario
        return { email, id };
    } catch (error) {
        // Manejar errores de decodificación del token
        console.error('Error al decodificar el token:', error);
        return null;
    }
}
    
    
const token = 'secreto'; // Aquí deberías tener el token que recibiste del cliente
const datosUsuario = obtenerDatosUsuario(token);
if (datosUsuario) {
    console.log('Datos del usuario:', datosUsuario);
} else {
    console.log('Token inválido o expirado.');
}

async function logoutUsuario(req, res) {
    // Aquí no es necesario hacer nada ya que los tokens JWT son stateless
    res.status(200).json({ mensaje: 'Logout exitoso' });
}




module.exports = {
    guardarUsuario,
    obtenerUsuarios,
    loginUsuario,
    logoutUsuario
};


