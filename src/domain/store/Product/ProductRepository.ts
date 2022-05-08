import { IProduct } from "./IProduct";

export interface ProductRepository {
    list(): Promise<IProduct[]>
    findById(id: number): Promise<IProduct>
}