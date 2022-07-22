const { Router } = require('express');
const clienteController = require('../controller/cliente.controller');
const ativosController = require('../controller/ativos.controller');
const validateToken = require('../middlewares/validateToken');
const validateClient =require('../middlewares/validateCliente');
const saqueValidate = require('../middlewares/saqueValidate');
const depositoValidate = require('../middlewares/depositoValidate');

const routers = Router();

routers.get('/:id', validateToken, clienteController.getBalanceByClienteId);
routers.get('/ativos/:codCliente', validateToken, ativosController.getAllActionsByClient);
routers.post('/', validateClient, clienteController.createClient);
routers.post('/deposito', validateToken, depositoValidate, clienteController.getDeposit);
routers.post('/saque',validateToken, saqueValidate, clienteController.getWithdrawMoney);

module.exports = routers;