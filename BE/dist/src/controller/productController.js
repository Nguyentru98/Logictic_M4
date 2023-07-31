"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const productService_1 = __importDefault(require("../service/productService"));
class ProductController {
    constructor() {
        this.findAll = async (req, res) => {
            let list;
            if (req.query.price) {
                list = await this.productService.sortPrice(req.query.price);
            }
            else if (req.query.name) {
                list = await this.productService.findByName(req.query.name);
            }
            else {
                list = await this.productService.getAll();
            }
            res.json(list);
        };
        this.add = async (req, res) => {
            let data = await this.productService.add(req.body);
            res.json("thêm sp thành công");
        };
        this.update = async (req, res) => {
            let data = await this.productService.update(req.params.id, req.body);
            console.log(req.params.id);
            res.json("sửa thành công");
        };
        this.delete = async (req, res) => {
            let data = await this.productService.delete(req.params.id);
            res.json("xóa thành công");
        };
        this.finByName = async (req, res) => {
            let data = await this.productService.findByName(req.query.name);
            res.json(data);
        };
        this.ASC = async (req, res) => {
            let data = await this.productService.ASC();
            res.json(data);
        };
        this.DESC = async (req, res) => {
            let data = await this.productService.DESC();
            res.json(data);
        };
        this.productService = productService_1.default;
    }
}
exports.default = new ProductController();
//# sourceMappingURL=productController.js.map