const express = require('express');
const ativos = require('./src/routers/ativos.router');
const cliente = require('./src/routers/cliente.router');
// const investimentos = require('./investimentos.router');

const app = express();
app.use(express.json());

app.use('/ativos', ativos)
app.use('/conta', cliente)
// router.use('/investimentos', investimentos)


module.exports = app;
