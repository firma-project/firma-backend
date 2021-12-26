import { Router } from "express";
import { ListVoteController } from "../controllers/vote/ListVoteController";

export default (router: Router): void => {
    router.get('/votes', new ListVoteController().handle);
}