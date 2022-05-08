import { IStock } from "./IStock";

export interface StockRepository {
    findByProductId(): Promise<IStock>;
}