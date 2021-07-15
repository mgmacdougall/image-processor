"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var indexService_1 = __importDefault(require("../services/indexService"));
var indexTextController = function (req, res) {
    var r = indexService_1.default('Hi');
    res.send(r);
};
exports.default = indexTextController;
//# sourceMappingURL=indexController.js.map