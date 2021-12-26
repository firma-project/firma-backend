import { Vote } from "./Vote";

export class VoteFactory {

    public static create (data: any): Vote {
        const { from, origin, createdAt } = data;
        const user = new Vote(from, origin, createdAt);
        
        return user;
    }
}