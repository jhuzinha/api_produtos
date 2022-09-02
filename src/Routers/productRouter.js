import { Router } from "express";
import {getDateBuy, getStatus, getNotCancel, getPricePosted} from '../Controllers/productController.js';

const productRouter = Router();

productRouter.get('/data-compra', getDateBuy )
productRouter.get('/status-primeiro', getStatus)
productRouter.get('/not-cancel', getNotCancel)
productRouter.get('/price-posted', getPricePosted)

export default productRouter;