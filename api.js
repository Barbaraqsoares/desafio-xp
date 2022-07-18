const express = require('express');
const { Cliente, Carteira, Acoes } = require('./models');

const app = express();
app.use(express.json());

app.get('/', async (req, res) => {
  const clientes = await Cliente.findAll();
  return res.status(201).json(clientes);
}),


module.exports = app;
