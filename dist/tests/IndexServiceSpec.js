"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var indexService_1 = __importDefault(require("../services/indexService"));
describe('"IndexService tests', function () {
    it('Should return an emptry string when given an empty string ', function () {
        var result = indexService_1.default("Hi");
        console.log(result);
        expect(result).toEqual("Hi");
    });
});
//# sourceMappingURL=IndexServiceSpec.js.map