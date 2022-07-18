import { Router } from 'express';

const routers = Router();

routers.get('/:codCliente');
routers.get('/:codAtivo');

export default routers;