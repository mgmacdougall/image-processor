"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// The main Application entry point
var express_1 = __importDefault(require("express"));
var ImageController_1 = __importDefault(require("../controllers/ImageController"));
var FetchController_1 = __importDefault(require("../controllers/FetchController"));
var indexRouter = express_1.default.Router();
// Fetch image path
indexRouter.get('/', FetchController_1.default);
// Write Image path
indexRouter.post('/', ImageController_1.default);
exports.default = indexRouter;
//# sourceMappingURL=indexRoute.js.map