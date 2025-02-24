const storage = require('./storage');

function insertar_cliente( dato ) {
    return new Promise( async (resolve, reject) => {
        if (!dato.nombre || !dato.apellido || !dato.email || !dato.clave) {
            reject( 'Los datos se encuentran incompletos.' )
        } else {
            resolve( storage.insertar( dato ) )
        }

        try {
            // Verificar si el correo ya existe
            const existeCliente = await storage.buscarEmail(dato.email);
            if (existeCliente) {
                return reject('El correo ya está registrado');
            }
    
            // Insertar el nuevo cliente
            return await storage.insertar(dato);
        } catch (error) {
            console.error('Error al insertar cliente:', error.message);
            throw error;
        }
    } )
}

function iniciar_sesion_cliente(dato) {
    return new Promise(async (resolve, reject) => {
        const { email, clave } = dato;

        if (!email || !clave) {
            return reject('El email y la clave son obligatorios.');
        }

        try {
            // Buscar al cliente por email
            const cliente_email = await storage.buscarEmail(email);
            if (!cliente_email) {
                return reject('Cliente no encontrado.');
            }

            if (cliente_email.clave !== clave) {
                return reject('Contraseña incorrecta.');
            }

            resolve({ message: 'Inicio de sesión exitoso.', cliente_email });
        } catch (error) {
            reject('Error al iniciar sesión.');
        }
    });
}

module.exports = {
    insertar_cliente,
    iniciar_sesion_cliente
}

