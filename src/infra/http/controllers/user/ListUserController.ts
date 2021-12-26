import { Request, Response } from "express";
import { Controller } from "../../protocols";
import userSchema from '../../../schemas/UserSchema';
import { ListUser } from "../../../../application/use-cases/user/ListUser";

export class ListUserController implements Controller {
    
    async handle(req: Request, res: Response) {

        const userRepository = userSchema;
        const useCase = new ListUser(userRepository);
        
        const users = await useCase.execute();
        return res.send(users);
    }
    

}