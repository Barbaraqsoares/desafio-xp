const express = require('express');
const validateLogin = require('../middlewares/validateLogin');
const clienteController = require('../controller/cliente.controller');

const routers = express.Router();

/** 
 *@swagger
 *  tags:
 *    name: Login
 *    description: Rota para login 
*/

/** 
 *@swagger
 *  components:
 *    schemas: 
 *      Login:
 *        type: object
 *        required:
 *          - email
 *          - senha
 *        properties:
 *          token:
 *            type: string
 *        example:
 *          email: test@gmail.com
 *          senha: 123456
*/

/** 
 *@swagger
 * login/
 *  post:
 *    tags: [Login]
 *    description: Endpoint para login
 *    security:
 *      - bearerAuth: [] 
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *    responses:
 *      200:
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *                $ref: '#/components/schemas/Login'
*/
routers.post('/', validateLogin, clienteController.loginClient);

module.exports = routers;