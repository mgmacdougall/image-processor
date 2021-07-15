"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// The main Application entry point
var express_1 = __importDefault(require("express"));
var indexService_1 = __importDefault(require("../services/indexService"));
var indexRouter = express_1.default.Router();
indexRouter.get('/', function (req, res) {
    var r = indexService_1.default('Hi');
    res.send(r);
});
exports.default = indexRouter;
//# sourceMappingURL=indexRoute.js.map