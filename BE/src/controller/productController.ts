import {Request, Response} from "express";
import productService from "../service/productService";


class ProductController {
    private productService;

    constructor() {
        this.productService = productService;
    }

    findAll = async (req: Request, res: Response) => {
        let list
        if(req.query.price){
         list = await this.productService.sortPrice(req.query.price)
        }else if(req.query.name) {
            list = await this.productService.findByName(req.query.name)
        }
        else{
         list = await this.productService.getAll();
        }
        res.json(list);
    }
    add = async (req: Request, res: Response) => { 
        let data = await this.productService.add(req.body)
        res.json("thêm sp thành công");
    }
    update =async (req: Request ,res: Response) => {
        let data = await this.productService.update(req.params.id, req.body)
        console.log(req.params.id)
        res.json("sửa thành công");
    }
    delete = async(req: Request, res: Response) => {
        let data = await this.productService.delete(req.params.id)
        res.json("xóa thành công");
    }
    finByName = async ( req: Request, res: Response) => {
        let data = await this.productService.findByName(req.query.name)
        res.json(data);
    }
    finById = async ( req: Request, res: Response) => {
        let data = await this.productService.findById(req.query.id)
        res.json(data);
    }

    ASC = async(req: Request, res: Response)=>{
        let data = await this.productService.ASC()
        res.json(data);
    }
    DESC = async(req: Request, res: Response)=>{
        let data = await this.productService.DESC()
        res.json(data);
    }

}
export default new ProductController();
