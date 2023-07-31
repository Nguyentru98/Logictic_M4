import {Router} from "express";
import productController from "../controller/productController";

const productRouter = Router();

productRouter.get('', productController.findAll);
productRouter.post('/add', productController.add);
productRouter.put('/update/:id', productController.update);
productRouter.delete('/delete/:id', productController.delete);



export default productRouter;
