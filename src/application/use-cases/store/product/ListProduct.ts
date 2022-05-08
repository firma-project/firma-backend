import { ProductRepository } from "../../../../domain/store/Product/ProductRepository";

export class ListProduct {

    private productRepository: ProductRepository;

    constructor(productRepository: ProductRepository) {
        this.productRepository = productRepository;
    }

    async execute () {
        const products = await this.productRepository.list();
        return products.map(product => product.getProduct()); 
    }

}