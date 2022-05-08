import { Schema, model, Model } from "mongoose";
import { IProduct } from "../../domain/store/Product/IProduct";
import { Product } from "../../domain/store/Product/Product";
import { ProductRepository } from "../../domain/store/Product/ProductRepository";
import { ProductFactory } from "../../domain/store/Product/ProductFactory";
import stockSchema from "./StockSchema";


class ProductSchema implements ProductRepository {

    private schema: Schema<Product>;
    private Product: Model<Product>;
    private stockSchema;

    constructor () {
        this.schema = new Schema({
            name: String,
            description: String,
            type: String,
            image: String,
            price: Number,
            listPrice: Number,
            stock: { type: Schema.Types.ObjectId, ref: "Stock" }
        })

        this.Product = model('Product', this.schema);
        this.stockSchema = stockSchema;
    }

    async list (): Promise<IProduct[]> {
        const products = await this.Product
            .find()
            .populate("stock")
            .exec(); 
            console.log(products)
        return products.map(product => ProductFactory.create(product));
    }
    async findById (id: number): Promise<IProduct> {
        const product = await this.Product.findOne({ id }).exec();
        return ProductFactory.create(product);
    }

}


export default new ProductSchema();