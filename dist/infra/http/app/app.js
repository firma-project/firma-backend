"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
require("./setup");
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var route_1 = require("./route");
var app = (0, express_1["default"])();
app.use((0, cors_1["default"])());
app.use(express_1["default"].json());
(0, route_1.setupRoute)(app);
exports["default"] = app;
