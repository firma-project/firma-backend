import { HttpRequest, HttpResponse} from '../../protocols/Http';
import { Controller } from "../../protocols";
import userSchema from '../../../schemas/UserSchema';
import { ListUser } from "../../../../application/use-cases/user/ListUser";
import { HttpStatusCode } from '../../utils/HttpEnum';

export class ListUserController implements Controller {
    
    async handle(): Promise<HttpResponse> {

        const userRepository = userSchema;
        const useCase = new ListUser(userRepository);
        
        const users = await useCase.execute();
        return {
            statusCode: HttpStatusCode.OK,
            body: users,
        }
    }
    

}