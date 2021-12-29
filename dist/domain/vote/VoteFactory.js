"use strict";
exports.__esModule = true;
exports.VoteFactory = void 0;
var Vote_1 = require("./Vote");
var VoteFactory = /** @class */ (function () {
    function VoteFactory() {
    }
    VoteFactory.create = function (data) {
        var from = data.from, origin = data.origin, createdAt = data.createdAt;
        var user = new Vote_1.Vote(from, origin, createdAt);
        return user;
    };
    return VoteFactory;
}());
exports.VoteFactory = VoteFactory;
