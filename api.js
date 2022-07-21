const express = require('express');
require('express-async-errors');
const cors = require('cors');
const ativos = require('./src/routers/ativos.router');
const cliente = require('./src/routers/cliente.router');
const investimentos = require('./src/routers/investimentos.router');
const login = require('./src/routers/login.router');
const errorHandler = require('./src/middlewares/errorHandler');

const app = express();
app.use(express.json());
app.use(cors());

app.use('/login', login);
app.use('/conta', cliente);
app.use('/ativos', ativos);
app.use('/investimentos', investimentos);

app.use(errorHandler);

module.exports = app;
