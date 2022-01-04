"use strict";
exports.__esModule = true;
exports.User = void 0;
var User = /** @class */ (function () {
    function User(name, email, profile, uid, sessionToken, id) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.profile = profile;
        this.uid = uid;
        this.sessionToken = sessionToken;
    }
    return User;
}());
exports.User = User;
