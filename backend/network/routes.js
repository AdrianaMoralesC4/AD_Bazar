const clientes = require('../components/clientes/interface')
const admins = require('../components/administrador/interface')


const routes = function( server ) {
    
    server.use('/clientes', clientes)
    server.use('/clientes/login', clientes)
    server.use('/admins', admins)
    server.use('/admins/login', admins)
}

module.exports = routes