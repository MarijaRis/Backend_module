import { Router } from 'express';

import customers from '../customers/index';
import orders from '../orders/index';
import products from '../products/index';
import product_type from '../product_type/index';
import invoices from '../invoices/index';

const indexRouter = Router();


indexRouter.use(customers.route);
indexRouter.use(orders.route);
indexRouter.use(products.route);
indexRouter.use(product_type.route);
indexRouter.use(invoices.route);

export default indexRouter;