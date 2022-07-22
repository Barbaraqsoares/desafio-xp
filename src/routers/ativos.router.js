const { Router } = require('express');
const ativosController = require('../controller/ativos.controller');
// const validateToken = require('../middlewares/validateToken');

const routers = Router();

routers.get('/:codAtivo', ativosController.getAction);

module.exports = routers;