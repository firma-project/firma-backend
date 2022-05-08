import { IProduct } from "../Product/IProduct";

export interface IStock {
    id: number;
    product: IProduct;
    quantity: number;
    sold: number;
    isAvailable: boolean;

    getStock(): number;
}