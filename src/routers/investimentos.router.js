const { Router } = require('express');
const investimentoController = require('../controller/investimentos.controller');

const routers = Router();

routers.post('/comprar', investimentoController.getBuyShares);
routers.post('/vender', investimentoController.getSellShares)

module.exports = routers;