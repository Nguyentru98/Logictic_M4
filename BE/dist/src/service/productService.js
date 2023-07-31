"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const product_1 = require("../entity/product");
const data_source_1 = require("../data-source");
class Productservice {
    constructor() {
        this.getAll = async () => {
            let product = await this.Repository.find({});
            return product;
        };
        this.add = async (product) => {
            await this.Repository.save(product);
        };
        this.update = async (id, product) => {
            return await this.Repository.update(id, product);
        };
        this.findById = async (id) => {
            return await this.Repository.find({
                where: {
                    id: id
                },
            });
        };
        this.findByName = async (name) => {
            return await this.Repository.find({
                where: {
                    name: name
                },
            });
        };
        this.delete = async (id) => {
            return await this.Repository.delete(id);
        };
        this.sortPrice = async (price) => {
            return await this.Repository.find({
                order: { price: price }
            });
        };
        this.findProduct = async (name) => {
            return await this.Repository.find({
                relations: {
                    class: true
                },
                where: {
                    name: name
                }
            });
        };
        this.Repository = data_source_1.AppDataSource.getRepository(product_1.Product);
    }
}
exports.default = new Productservice();
//# sourceMappingURL=productService.js.map