import { IStock } from "../Stock/IStock";
import { EType } from "./EType";
import { IProduct } from "./IProduct";

export class Product implements IProduct {
    _id: string;
    name: string;
    description: string;
    type: EType;
    image: string;
    price: number;
    listPrice: number;
    stock: IStock;

    constructor(
        name: string,
        description: string,
        type: EType,
        image: string,
        _id: string,
        price: number,
        listPrice: number,
        stock: IStock,
    ) {

        this._id = _id;
        this.name = name;
        this.description = description;
        this.type = type;
        this.image = image;
        this.price = price;
        this.listPrice = listPrice;
        this.stock = stock;
    } 
    
    getProduct() {
        return {
            id: this._id,
            name: this.name,
            description: this.description,
            type: this.type,
            imageUrl: this.image, 
            price: this.price,
            listPrice: this.listPrice,
            stock: this.stock,
        }
    }

}