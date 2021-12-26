import { Router } from "express";
import { adapterRoute } from "../utils/expressRouteAdapter";
import { ListVoteController } from "../controllers/vote/ListVoteController";

export default (router: Router): void => {
    router.get('/votes', adapterRoute(new ListVoteController()));
}