"use strict";
exports.__esModule = true;
var expressRouteAdapter_1 = require("../utils/expressRouteAdapter");
var AddUserController_1 = require("../controllers/user/AddUserController");
var ListUserController_1 = require("../controllers/user/ListUserController");
exports["default"] = (function (router) {
    router.post('/users', (0, expressRouteAdapter_1.adapterRoute)(new AddUserController_1.AddUserController()));
    router.get('/users', (0, expressRouteAdapter_1.adapterRoute)(new ListUserController_1.ListUserController()));
});
