import { HttpRequest, HttpResponse} from '../../protocols/Http';
import { Controller } from "../../protocols";
import { AddUser } from '../../../../application/use-cases/user/AddUser';
import { UserFactory } from "../../../../domain/user/UserFactory";
import userSchema from '../../../schemas/UserSchema';
import { addUserValidation } from '../../validation/UserValidation'
import { HttpStatusCode } from '../../utils/HttpEnum';

export class AddUserController implements Controller {
    
    async handle(req: HttpRequest): Promise<HttpResponse> {

        const { error } = await addUserValidation.validate(req.body)
        if (error) {
            return {
                statusCode: HttpStatusCode.BAD_REQUEST,
            }
        }

        const user = UserFactory.create(req.body);
        const userRepository = userSchema;
        const useCase = new AddUser(userRepository);
        
        useCase.execute(user);

        return {
            statusCode: HttpStatusCode.OK,
            body: 'user created',
        }
    }
    

}