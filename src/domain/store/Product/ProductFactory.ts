import { Product } from "./Product";

export class ProductFactory {

    public static create (data: any): Product {
        const {
            name,
            description,
            type,
            image,
            _id,
            price,
            listPrice,
            stock,
         } = data;
        const product = new Product(
            name,
            description,
            type,
            image,
            _id,
            price,
            listPrice,
            stock
            );
      
        return product;
    }

}