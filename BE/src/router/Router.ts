import {Router} from "express";
import produtRouter from "./productRouter";

const router = Router();
router.use('/products', produtRouter);

export default router;
