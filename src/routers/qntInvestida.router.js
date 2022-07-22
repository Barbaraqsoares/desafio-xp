const express = require('express');
const ativosController = require('../controller/ativos.controller');
const routers = express.Router();

routers.get('/', ativosController.getAllActions);

module.exports = routers;