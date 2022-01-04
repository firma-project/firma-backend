"use strict";
exports.__esModule = true;
var mongoose_1 = require("mongoose");
var VoteSchema = /** @class */ (function () {
    function VoteSchema() {
        this.schema = new mongoose_1.Schema({
            name: String,
            email: String,
            profile: String
        });
        this.Vote = (0, mongoose_1.model)('Vote', this.schema);
    }
    VoteSchema.prototype.add = function (vote) {
        return this.Vote.create(vote);
    };
    VoteSchema.prototype.list = function () {
        return this.Vote.find().exec();
    };
    return VoteSchema;
}());
exports["default"] = new VoteSchema();
