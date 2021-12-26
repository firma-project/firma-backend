import { Router } from "express";
import { adapterRoute } from "../utils/expressRouteAdapter";
import { AddUserController } from '../controllers/user/AddUserController';
import { ListUserController } from "../controllers/user/ListUserController";

export default (router: Router): void => {
    router.post('/users', adapterRoute(new AddUserController()));
    router.get('/users', adapterRoute(new ListUserController()));
}