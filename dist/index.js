"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// The main Application entry point
var express_1 = __importDefault(require("express"));
var indexRoute_1 = __importDefault(require("./routes/indexRoute"));
var PORT = 5555;
var app = express_1.default();
app.use('/', indexRoute_1.default);
app.listen(PORT, function () { return console.log("Server started on port " + PORT); });
exports.default = app;
//# sourceMappingURL=index.js.map