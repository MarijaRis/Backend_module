import { Router } from 'express';
import actions from './actions';

const customersRouter = Router();

customersRouter.get('/customers', actions.list);
customersRouter.get('/customers/:id', actions.get);
customersRouter.post('/customers', actions.create);
customersRouter.put('/customers/:id', actions.update);
customersRouter.delete('/customers/:id', actions.del);


export default customersRouter;