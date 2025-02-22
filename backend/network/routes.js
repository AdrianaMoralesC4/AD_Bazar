
const clientes = require('../components/clientes/interface')


const routes = function( server ) {
    
    server.use('/clientes', clientes)
    server.use('/clientes/login', clientes)
}

module.exports = routes