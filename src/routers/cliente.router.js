const { Router } = require('express');
const clienteController = require('../controller/cliente.controller');
const ativosController = require('../controller/ativos.controller')
const { saqueValidate, depositoValidate } = require('../middlewares');

const routers = Router();

routers.get('/:id', clienteController.getclienteByClienteId);
routers.get('/ativos/:codCliente', ativosController.getAllActionsByClient);
routers.post('/deposito', depositoValidate, clienteController.getDeposit);
routers.post('/saque', saqueValidate, clienteController.getWithdrawMoney);

module.exports = routers;