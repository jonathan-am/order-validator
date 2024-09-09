import { Router } from 'express';
import { receiveOrder } from '~/controller/order.controller';
import resolve from '~/utils/ResolveRequest';

const router = Router();

router.post('/order', resolve(receiveOrder));

export default router;
