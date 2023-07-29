"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Order = void 0;
const typeorm_1 = require("typeorm");
const User_1 = require("./User");
const Logictics_1 = require("./Logictics");
const Product_1 = require("./Product");
let Order = exports.Order = class Order {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Order.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Order.prototype, "shippingday", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Order.prototype, "delivery", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Order.prototype, "address", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Order.prototype, "totalprice", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => User_1.User, (user) => user.id),
    __metadata("design:type", User_1.User)
], Order.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Logictics_1.Logictics, (logictics) => logictics.id),
    __metadata("design:type", Logictics_1.Logictics)
], Order.prototype, "logictics", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Product_1.Product, (product) => product.id),
    __metadata("design:type", Product_1.Product)
], Order.prototype, "product", void 0);
exports.Order = Order = __decorate([
    (0, typeorm_1.Entity)()
], Order);
//# sourceMappingURL=Order.js.map