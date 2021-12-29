"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.addUserValidation = void 0;
var joi_1 = __importDefault(require("joi"));
var addUserValidation = joi_1["default"].object({
    name: joi_1["default"].string().required(),
    email: joi_1["default"].string().required(),
    profile: joi_1["default"].string().required(),
    uid: joi_1["default"].string().required(),
    sessionToken: joi_1["default"].string().required()
});
exports.addUserValidation = addUserValidation;
