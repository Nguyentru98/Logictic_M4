"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const productController_1 = __importDefault(require("../controller/productController"));
const jwt_1 = __importDefault(require("../middleware/jwt"));
const productRouter = (0, express_1.Router)();
productRouter.use(jwt_1.default);
productRouter.get('', productController_1.default.findAll);
productRouter.post('/add', productController_1.default.add);
productRouter.put('/update/:id', productController_1.default.update);
productRouter.delete('/delete/:id', productController_1.default.delete);
exports.default = productRouter;
//# sourceMappingURL=productRouter.js.map