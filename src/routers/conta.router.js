import { Router } from 'express';

const routers = Router();

routers.get('/:codCliente');
routers.post('/deposito');
routers.post('/saque');

export default routers;