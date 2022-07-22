const express = require('express');
require('express-async-errors');
const cors = require('cors');
const swaggerConfig = require('./src/docs/swagger.config');
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const ativos = require('./src/routers/ativos.router');
const cliente = require('./src/routers/cliente.router');
const investimentos = require('./src/routers/investimentos.router');
const login = require('./src/routers/login.router');
const qntInvestida = require('./src/routers/qntInvestida.router')
const errorHandler = require('./src/middlewares/errorHandler');

const app = express();
app.use(express.json());
app.use(cors());

const swaggerDoc = swaggerJSDoc(swaggerConfig);
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc));

app.use('/login', login);
app.use('/conta', cliente);
app.use('/ativos', ativos);
app.use('/investimentos', investimentos);
app.use('/ativos-investidos', qntInvestida);

app.use(errorHandler);

module.exports = app;
