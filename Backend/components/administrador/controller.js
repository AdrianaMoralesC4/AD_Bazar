const storage = require('./storage');

function insertar_admin( dato ) {
    return new Promise( async (resolve, reject) => {
        if (!dato.nombre || !dato.apellido || !dato.email || !dato.clave) {
            reject( 'Los datos se encuentran incompletos.' )
        } else {
            resolve( storage.insertar( dato ) )
        }

        try {
            // Verificar si el correo ya existe
            const existeAdmin = await storage.buscarEmail(dato.email);
            if (existeAdmin) {
                return reject('El correo ya está registrado');
            }
    
            // Insertar el nuevo admin
            return await storage.insertar(dato);
        } catch (error) {
            console.error('Error al insertar Administrador:', error.message);
            throw error;
        }
    } )
}

function iniciar_sesion_admin(dato) {
    return new Promise(async (resolve, reject) => {
        const { email, clave } = dato;

        if (!email || !clave) {
            return reject('El email y la clave son obligatorios.');
        }

        try {
            // Buscar al admin por email
            const admin_email = await storage.buscarEmail(email);
            if (!admin_email) {
                return reject('Administrador no encontrado.');
            }

            if (admin_email.clave !== clave) {
                return reject('Contraseña incorrecta.');
            }

            resolve({ message: 'Inicio de sesión exitoso.', admin_email });
        } catch (error) {
            reject('Error al iniciar sesión.');
        }
    });
}

module.exports = {
    insertar_admin,
    iniciar_sesion_admin
}

