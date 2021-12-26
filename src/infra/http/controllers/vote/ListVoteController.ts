import { Request, Response } from 'express';
import { Controller } from '../../protocols/Controller';
import voteSchema from '../../../schemas/VoteSchema';
import { ListVote } from '../../../../application/use-cases/vote/ListVote';

export class ListVoteController implements Controller {
    async handle (req: Request, res: Response) {
        const voteRepository = voteSchema;
        const useCase = new ListVote(voteRepository);
        
        const votes = useCase.execute();

       return res.send(votes)
    }

}