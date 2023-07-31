declare class Productservice {
    private Repository;
    constructor();
    getAll: () => Promise<any>;
    add: (product: any) => Promise<void>;
    update: (id: any, product: any) => Promise<any>;
    findById: (id: any) => Promise<any>;
    findByName: (name: any) => Promise<any>;
    delete: (id: any) => Promise<any>;
    sortPrice: (price: any) => Promise<any>;
    findProduct: (name: any) => Promise<any>;
}
declare const _default: Productservice;
export default _default;
