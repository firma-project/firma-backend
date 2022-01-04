"use strict";
exports.__esModule = true;
exports.UserFactory = void 0;
var User_1 = require("./User");
var UserFactory = /** @class */ (function () {
    function UserFactory() {
    }
    UserFactory.create = function (data) {
        var name = data.name, email = data.email, profile = data.profile, uid = data.uid, sessionToken = data.sessionToken;
        var user = new User_1.User(name, email, profile, uid, sessionToken);
        return user;
    };
    return UserFactory;
}());
exports.UserFactory = UserFactory;
