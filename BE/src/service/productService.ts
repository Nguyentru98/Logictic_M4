import { Product } from "../entity/product";
import {AppDataSource} from "../data-source";

class Productservice {
    private Repository;
    constructor() {
        this.Repository = AppDataSource.getRepository(Product);
    }

    getAll = async () => {
        let product = await this.Repository.find({          
        });
        return product;
    }
    add = async (product) => {
         await this.Repository.save(product)
    }
    update = async ( id, product) => {
       return await this.Repository.update(id, product)
    }
    findById = async(id) => {
        return await this.Repository.find({
            where: {
               id: id  
            },
        })
    }
    findByName = async(name) => {
        return await this.Repository.find({
            where: {
               name: name  
            },
        })
    }
    delete = async (id) => {
        return await this.Repository.delete(id)
    }
    sortPrice = async (price) => {
        return await this.Repository.find(
            {
                order: {price: price}
        })
    }
    // DESC = async () => {
    //     return await this.Repository.find({order: {price: 'DESC'}})
    // }
    findProduct = async (name) => {
        return await this.Repository.find({
        relations : {
            class : true
        },
        where : { 
             name : name    
        }
    });
    }
    
}

export default new Productservice();
