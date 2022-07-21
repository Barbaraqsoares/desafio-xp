const express = require('express');
const ativos = require('./src/routers/ativos.router');
const cliente = require('./src/routers/cliente.router');
const investimentos = require('./src/routers/investimentos.router');
const { errorHandler } = require('./src/middlewares/errorHandler');

const app = express();
app.use(express.json());

app.use('/ativos', ativos)
app.use('/conta', cliente)
app.use('/investimentos', investimentos)

app.use(errorHandler);


module.exports = app;
