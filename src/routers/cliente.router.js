const { Router } = require('express');
const clienteController = require('../controller/cliente.controller');
const ativosController = require('../controller/ativos.controller')
const saqueValidate = require('../middlewares/saqueValidate');
const depositoValidate = require('../middlewares/depositoValidate');

const routers = Router();

routers.get('/:id', clienteController.getclienteByClienteId);
routers.get('/ativos/:codCliente', ativosController.getAllActionsByClient);
routers.post('/deposito', depositoValidate, clienteController.getDeposit);
routers.post('/saque', saqueValidate, clienteController.getWithdrawMoney);

module.exports = routers;