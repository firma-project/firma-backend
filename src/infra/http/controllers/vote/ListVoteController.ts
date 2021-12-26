import { HttpRequest, HttpResponse} from '../../protocols/Http';
import { Controller } from '../../protocols/Controller';
import voteSchema from '../../../schemas/VoteSchema';
import { ListVote } from '../../../../application/use-cases/vote/ListVote';
import { HttpStatusCode } from '../../utils/HttpEnum';

export class ListVoteController implements Controller {

    async handle (req: HttpRequest): Promise<HttpResponse> {
        const voteRepository = voteSchema;
        const useCase = new ListVote(voteRepository);
        
        const votes = useCase.execute();

        return {
            statusCode: HttpStatusCode.OK,
            body: votes,
        }
    }

}