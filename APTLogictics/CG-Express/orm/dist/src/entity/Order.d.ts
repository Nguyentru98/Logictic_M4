import { User } from "./User";
import { Logictics } from "./Logictics";
import { Product } from "./Product";
export declare class Order {
    id: number;
    shippingday: string;
    delivery: string;
    address: string;
    totalprice: number;
    user: User;
    logictics: Logictics;
    product: Product;
}
