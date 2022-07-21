const { Router } = require('express');
const investimentosController = require('../controller/investimentos.controller');
const validateToken = require('../middlewares/validateToken');

const routers = Router();

routers.post('/comprar', validateToken, investimentosController.getBuyShares);
routers.post('/vender', validateToken, investimentosController.getSellShares)

module.exports = routers;