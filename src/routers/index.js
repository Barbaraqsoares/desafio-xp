import { Router } from 'express';
import ativos from './ativos.router';
import conta from './conta.router'
import investimentos from './investimentos.router';

const router = Router();

router.use('/ativos', ativos)
router.use('/conta', conta)
router.use('/investimentos', investimentos)


export default router;