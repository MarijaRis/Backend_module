import { Router } from 'express';
import actions from './actions';

const invoicesRouter = Router();

invoicesRouter.get('/invoices', actions.list);
invoicesRouter.get('/invoices/:id', actions.get);
invoicesRouter.post('/invoices/', actions.create);
invoicesRouter.put('/invoices/:id', actions.update);
invoicesRouter.delete('/invoices/:id', actions.del);

export default invoicesRouter;
