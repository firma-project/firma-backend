"use strict";
exports.__esModule = true;
var expressRouteAdapter_1 = require("../utils/expressRouteAdapter");
var ListVoteController_1 = require("../controllers/vote/ListVoteController");
exports["default"] = (function (router) {
    router.get('/votes', (0, expressRouteAdapter_1.adapterRoute)(new ListVoteController_1.ListVoteController()));
});
