const { Router } = require('express');
const investimentosController = require('../controller/investimentos.controller');

const routers = Router();

routers.post('/comprar', investimentosController.getBuyShares);
routers.post('/vender', investimentosController.getSellShares)

module.exports = routers;