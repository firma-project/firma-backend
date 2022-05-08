import { Router } from "express";
import { adapterRoute } from "../utils/expressRouteAdapter";
import { ListProductController } from "../controllers/store/ListProductController";
export default (router: Router): void => {
    router.get('/store/products', adapterRoute(new ListProductController()));
}