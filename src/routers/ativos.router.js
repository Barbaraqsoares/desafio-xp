const { Router } = require('express');
const ativosController = require('../controller/ativos.controller');const validateToken = require('../middlewares/validateToken');

const routers = Router();

/** 
 *@swagger
 *  tags:
 *    name: Ativos
 *    description: Busca as ações pelo cógico do ativo 
*/

/** 
 *@swagger
 *  components:
 *    schemas: 
 *      Ativo:
 *        type: object
 *      required:
 *        - nomeAcao
 *        - qntAco
 *        - valorAcao
 *      properties:
 *        id:
 *          type: number
 *        nomeAcao:
 *          type: string
 *        qntAco:
 *          type: number
 *        valorAcao:
 *          type: float
 *      example:
 *        id: 1
 *        nomeAcao: Nubank
 *        qntAco: 2
 *        valorAcao: 12.12
*/

/** 
 *@swagger
 * ativos/{codAtivo}:
 *  get:
 *    tags: [Ativos]
 *    description: Endpoint retorna uma ação por codigo da ação
 *    security:
 *      - bearerAuth: [] 
 *    parameters:
 *      - in: path
 *        name: codAtivo
 *        type: number
 *        required: true
 *    responses:
 *      200:
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              $ref: '#/components/schemas/Ativo'
 *     
*/
routers.get('/:codAtivo', validateToken, ativosController.getAction);

module.exports = routers;