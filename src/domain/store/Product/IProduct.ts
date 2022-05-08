import { IStock } from "../Stock/IStock";
import { EType } from "./EType";

export interface IProduct {
    _id: string,
    name: string;
    description: string;
    type: EType;
    image: string;
    price: number;
    listPrice: number;
    stock: IStock,

    getProduct(): any;
}