import { Schema, model, Model } from "mongoose";
import { Vote } from "../../domain/vote/Vote";
import { VoteRepository } from "../../domain/vote/VoteRepository";


class VoteSchema implements VoteRepository {

    private schema: Schema<Vote>;
    private Vote: Model<Vote>;

    constructor () {
        this.schema = new Schema({
            name: String,
            email: String,
            profile: String,
        })
        this.Vote = model('Vote', this.schema);
    }

    add(vote: Vote): Promise<Vote> {
        return this.Vote.create(vote);
    }
    list(): Promise<Vote[]> {
        return this.Vote.find().exec();
    }
    
}

export default new VoteSchema();
