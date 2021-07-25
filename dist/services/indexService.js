"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var sharp_1 = __importDefault(require("sharp"));
var path_1 = __importDefault(require("path"));
var fs_1 = require("fs");
// Default directories
var imageSourceDir = path_1.default.join(__dirname, '..', '..', 'images');
var imageCacheDir = path_1.default.join(__dirname, '..', '..', 'images', 'cache');
var removeExtensions = function (fName) {
    if (fName.indexOf('.')) {
        return "" + fName.split('.')[0];
    }
    return fName;
};
var doesFileExistInImgDir = function (name) { return __awaiter(void 0, void 0, void 0, function () {
    var source, files, isFound;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                source = imageSourceDir;
                return [4 /*yield*/, fs_1.promises.readdir(source)];
            case 1:
                files = _a.sent();
                isFound = name ? files.indexOf(name) > 1 : false;
                return [2 /*return*/, isFound];
        }
    });
}); };
/**
 * This is the function that will change the size of the image.
 * NOTE: Called from the controller layer, that passes on the information.
 * @param width
 * @param height
 */
var changeFileSize = function (h, w, name) { return __awaiter(void 0, void 0, void 0, function () {
    var isSuccessful, cleanedFile, source, outFile, e_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                isSuccessful = false;
                return [4 /*yield*/, doesFileExistInImgDir(name)];
            case 1:
                if (!_a.sent()) return [3 /*break*/, 6];
                _a.label = 2;
            case 2:
                _a.trys.push([2, 5, , 6]);
                cleanedFile = removeExtensions(name || 'default');
                source = path_1.default.join(imageSourceDir, cleanedFile + ".jpg");
                outFile = path_1.default.join(imageCacheDir, cleanedFile + "_" + h + "_" + w + ".jpg");
                if (!(h && w)) return [3 /*break*/, 4];
                return [4 /*yield*/, resizeImage(source, h, w, outFile)];
            case 3:
                _a.sent();
                isSuccessful = true;
                _a.label = 4;
            case 4: return [3 /*break*/, 6];
            case 5:
                e_1 = _a.sent();
                console.log(e_1);
                return [3 /*break*/, 6];
            case 6: return [2 /*return*/, isSuccessful];
        }
    });
}); };
var resizeImage = function (inSource, height, width, outLocation) { return __awaiter(void 0, void 0, void 0, function () {
    var _resizedImg, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                _resizedImg = sharp_1.default(inSource, { raw: { width: width, height: height, channels: 3 } });
                return [4 /*yield*/, _resizedImg.toFile(outLocation)];
            case 1: return [2 /*return*/, _a.sent()];
            case 2:
                error_1 = _a.sent();
                throw new Error('Resize image failed with');
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.default = changeFileSize;
//# sourceMappingURL=indexService.js.map