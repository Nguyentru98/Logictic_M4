import {Router} from "express";
import produtRouter from "./productRouter";
import {userRouter} from "./userRouter";

const router = Router();
router.use('/products', produtRouter);
router.use('', userRouter);

export default router;
