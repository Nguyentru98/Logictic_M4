"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const Router_1 = __importDefault(require("./src/router/Router"));
const data_source_1 = require("./src/data-source");
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
data_source_1.AppDataSource.initialize().then(() => {
    console.log('Connect database success');
});
app.use((0, cors_1.default)());
app.use(express_1.default.static('./public'));
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use('', Router_1.default);
app.listen(3000, () => {
    console.log('Server is running');
});
//# sourceMappingURL=index.js.map