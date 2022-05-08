import { IProduct } from "../Product/IProduct";

export default class Stock {
    private id?: number;
    private product: IProduct;
    private quantity: number;
    private sold: number;
    private isAvailable: boolean;


    constructor(product: IProduct, quantity: number, sold?: number, isAvaiable?: boolean) {
        
        this.quantity = quantity;
        this.sold = sold || 0;
        this.isAvailable = isAvaiable || true;
    }
}
