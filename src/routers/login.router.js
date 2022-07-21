const express = require('express');
const validateLogin = require('../middlewares/validateLogin');
const clienteController = require('../controller/cliente.controller');

const routers = express.Router();

routers.post('/', validateLogin, clienteController.loginClient);

module.exports = routers;