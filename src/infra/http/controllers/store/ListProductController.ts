import { HttpRequest, HttpResponse } from "../../protocols";
import { Controller } from "../../protocols/Controller";
import productSchema from "../../../schemas/ProductSchema";
import { HttpStatusCode } from "../../utils/HttpEnum";
import { ListProduct } from "../../../../application/use-cases/store/product/ListProduct";

export class ListProductController implements Controller {
    
    async handle(req?: HttpRequest): Promise<HttpResponse> {
        
        const productRepository = productSchema;
        const useCase = new ListProduct(productRepository);
        
        const products = await useCase.execute();
        return {
            statusCode: HttpStatusCode.OK,
            body: products,
        }
    }

}