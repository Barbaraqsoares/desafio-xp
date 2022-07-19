const { Router } = require('express');
const ativosController = require('../controller/ativos.controller');


const routers = Router();

routers.get('/:codAtivo', ativosController.getAllActions);

module.exports = routers;