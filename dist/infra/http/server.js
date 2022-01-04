"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var app_1 = __importDefault(require("./app/app"));
var mongo_1 = __importDefault(require("../config/mongo"));
mongo_1["default"]
    .then(function () {
    console.log('Mongo ok');
    app_1["default"].listen(process.env.PORT, function () {
        console.log("Magic happens on ".concat(process.env.PORT, "."));
    });
})["catch"](function (err) {
    console.error('Mongo close', err);
});
process.on('unhandledRejection', function (reason, promise) {
    console.error(reason);
});
process.on('uncaughtException', function (err) {
    console.error('uncaughtException', JSON.stringify(err));
});
