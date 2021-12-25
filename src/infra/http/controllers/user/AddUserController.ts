import { Request, Response } from "express";
import { Controller } from "../../protocols";
import { AddUser } from '../../../../application/use-cases/user/AddUser';
import { UserFactory } from "../../../../domain/user/UserFactory";
import userSchema from '../../../schemas/UserSchema';

export class AddUserController implements Controller {
    
    async handle(req: Request, res: Response) {

        const user = UserFactory.create(req.body);
        const userRepository = userSchema;
        const useCase = new AddUser(userRepository);
        
        useCase.execute(user);

        return res.send('ok');
    }
    

}