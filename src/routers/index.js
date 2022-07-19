import { Router } from 'express';
import ativos from './ativos.router';
import cliente from './cliente.router'
import investimentos from './investimentos.router';

const router = Router();

router.use('/ativos', ativos)
router.use('/cliente', cliente)
router.use('/investimentos', investimentos)


export default router;