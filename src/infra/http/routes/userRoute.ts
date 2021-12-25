import { Router } from "express";
import { AddUserController } from '../controllers/user/AddUserController';
import { ListUserController } from "../controllers/user/ListUserController";
export default (router: Router): void => {
    router.post('/users', new AddUserController().handle);
    router.get('/users', new ListUserController().handle);
}