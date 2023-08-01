"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const productRouter_1 = __importDefault(require("./productRouter"));
const userRouter_1 = require("./userRouter");
const router = (0, express_1.Router)();
router.use('/products', productRouter_1.default);
router.use('', userRouter_1.userRouter);
exports.default = router;
//# sourceMappingURL=Router.js.map