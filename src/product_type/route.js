import { Router } from 'express';
import actions from './actions';

const productTypeRouter = Router();

productTypeRouter.get('/product_type', actions.list);
productTypeRouter.get('/product_type/:id', actions.get);
productTypeRouter.post('/product_type', actions.create);
productTypeRouter.put('/product_type/:id', actions.update);
productTypeRouter.delete('/product_type/:id', actions.del);


export default productTypeRouter;