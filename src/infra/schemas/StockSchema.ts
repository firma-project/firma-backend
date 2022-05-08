import { model, Model, Schema } from "mongoose";
import { IStock } from "../../domain/store/Stock/IStock";
import Stock from "../../domain/store/Stock/Stock";
import { StockRepository } from "../../domain/store/Stock/StockRepository";

class StockSchema implements StockRepository {

    private schema: Schema<Stock>;
    private Stock: Model<Stock>;

    constructor () {
        this.schema = new Schema({
            product: { type: Schema.Types.ObjectId, ref: "Product" },
            quantity: Number,
            sold: Number,
            isAvailable: Boolean,
        })

        this.Stock = model('Stock', this.schema);
    }
    
    findByProductId(): Promise<IStock> {
        throw new Error("Method not implemented.");
    }

}

export default new StockSchema();