import { Router } from 'express';
import actions from './actions';

const ordersRouter = Router();

ordersRouter.get('/orders', actions.list);
ordersRouter.get('/orders/:id', actions.get);
ordersRouter.post('/orders', actions.create);
ordersRouter.put('/orders/:id', actions.update);
ordersRouter.delete('/orders/:id', actions.del);


export default ordersRouter;