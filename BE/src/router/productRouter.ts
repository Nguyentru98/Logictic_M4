import {Router} from "express";
import productController from "../controller/productController";
import auth from "../middleware/jwt";

const productRouter = Router();
productRouter.use(auth)
productRouter.get('', productController.findAll);
productRouter.post('/add', productController.add);
productRouter.put('/update/:id', productController.update);
productRouter.delete('/delete/:id', productController.delete);
// productRouter.get('', productController.finById);


export default productRouter;
