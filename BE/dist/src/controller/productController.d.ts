import { Request, Response } from "express";
declare class ProductController {
    private productService;
    constructor();
    findAll: (req: Request, res: Response) => Promise<void>;
    add: (req: Request, res: Response) => Promise<void>;
    update: (req: Request, res: Response) => Promise<void>;
    delete: (req: Request, res: Response) => Promise<void>;
    finByName: (req: Request, res: Response) => Promise<void>;
    finById: (req: Request, res: Response) => Promise<void>;
    ASC: (req: Request, res: Response) => Promise<void>;
    DESC: (req: Request, res: Response) => Promise<void>;
}
declare const _default: ProductController;
export default _default;
