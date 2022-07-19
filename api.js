const express = require('express');
// const ativos = require('./ativos.router');
const cliente = require('./src/routers/cliente.router');
// const investimentos = require('./investimentos.router');

const app = express();
app.use(express.json());

// router.use('/ativos', ativos)
app.use('/conta', cliente)
// router.use('/investimentos', investimentos)


module.exports = app;
