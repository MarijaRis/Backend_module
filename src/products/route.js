import { Router } from 'express';
import actions from './actions';

const productsRouter = Router();

productsRouter.get('/products', actions.list);
productsRouter.get('/products/:id', actions.get);
productsRouter.post('/products/', actions.create);
productsRouter.put('/products/:id', actions.update);
productsRouter.delete('/products/:id', actions.del);


export default productsRouter;