const { Router } = require('express');
const clienteController = require('../controller/cliente.controller');

const routers = Router();

routers.get('/:id', clienteController.getclienteByClienteId);
// routers.post('/deposito');
// routers.post('/saque');

module.exports = routers;