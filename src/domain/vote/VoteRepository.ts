import { Vote } from "./Vote";

export interface VoteRepository {
    add(vote: Vote): Promise<Vote>;
    list(): Promise<Vote[]>;
}