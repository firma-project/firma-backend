import { VoteRepository } from '../../../domain/vote/VoteRepository';

export class ListVote {
    private voteRepository: VoteRepository;

    constructor (voteRepository: VoteRepository){
        this.voteRepository = voteRepository;
    }

    async execute () {
        return this.voteRepository.list();
    }
}