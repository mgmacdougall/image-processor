"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// The main Application entry point
var express_1 = __importDefault(require("express"));
var indexController_1 = __importDefault(require("../controllers/indexController"));
var ImageController_1 = __importDefault(require("../controllers/ImageController"));
var indexRouter = express_1.default.Router();
indexRouter.get('/', indexController_1.default);
indexRouter.get('/:name', ImageController_1.default);
exports.default = indexRouter;
//# sourceMappingURL=indexRoute.js.map