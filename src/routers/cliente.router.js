const { Router } = require('express');
const clienteController = require('../controller/cliente.controller');
const ativosController = require('../controller/ativos.controller');
const validateToken = require('../middlewares/validateToken');
const validateClient =require('../middlewares/validateCliente');
const saqueValidate = require('../middlewares/saqueValidate');
const depositoValidate = require('../middlewares/depositoValidate');

const routers = Router();

/** 
 *@swagger
 *  tags:
 *    name: Cliente
 *    description: Rotas relacinadas ao cliente
*/

/** 
 *@swagger
 *  components:
 *    schemas: 
 *      Cliente:
 *        type: object
 *      required:
 *        - nomecliente
 *        - email
 *        - senha
 *        - saldo
 *      properties:
 *        id:
 *          type: number
 *        nomecliente:
 *          type: string
 *        email:
 *          type: string
 *        senha:
 *          type: string
 *        saldo:
 *          type: number
 *      example:
 *        nomecliente: Bárbara
 *        email: test@gmail.com
 *        senha: 123456
 *        saldo: 0.00
*/

/** 
 *@swagger
 * /conta/{id}:
 *  get:
 *    tags: [Cliente]
 *    description: Endpoint retorna o id o saldo do cliente
 *    security:
 *      - bearerAuth: [] 
 *    parameters:
 *      - in: path
 *        name: id
 *        type: number
 *        required: true
 *    responses:
 *      200:
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *                items:
 *                  id:
 *                    type: number
 *                  saldo:
 *                    type: float
*/
routers.get('/:id', validateToken, clienteController.getBalanceByClienteId);
routers.get('/ativos/:codCliente', validateToken, ativosController.getAllActionsByClient);

/** 
 *@swagger
 * /conta/:
 *  post:
 *    tags: [Cliente]
 *    description: Endpoint que cria um usuário
 *    security:
 *      - bearerAuth: [] 
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            $ref: '#/components/schemas/Cliente'
 *    responses:
 *      201:
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              $ref: '#/components/schemas/Cliente'   
*/
routers.post('/', validateClient, clienteController.createClient);

/** 
 *@swagger
 * /conta/deposito:
 *  post:
 *    tags: [Cliente]
 *    description: Endpoint que faz um depósito
 *    security:
 *      - bearerAuth: [] 
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *              codCliente: 
 *                type: number
 *              valor:
 *                type: number
 *    responses:
 *      201:
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *                message:
 *                  type: string   
*/
routers.post('/deposito', validateToken, depositoValidate, clienteController.getDeposit);

/** 
 *@swagger
 * /conta/saque:
 *  post:
 *    tags: [Cliente]
 *    description: Endpoint que faz um saque
 *    security:
 *      - bearerAuth: [] 
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *              codCliente: 
 *                type: number
 *              valor:
 *                type: number
 *    responses:
 *      201:
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *                message:
 *                  type: string   
*/
routers.post('/saque',validateToken, saqueValidate, clienteController.getWithdrawMoney);

module.exports = routers;