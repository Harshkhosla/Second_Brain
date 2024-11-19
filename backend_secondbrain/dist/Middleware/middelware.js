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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.middleware = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const kEY = "harsh";
class middleware {
}
exports.middleware = middleware;
_a = middleware;
middleware.Middleware = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _b;
    const token = (_b = req.headers.authorization) === null || _b === void 0 ? void 0 : _b.split(' ').at(1);
    if (!token) {
        res.status(401).json({
            message: "No token present"
        });
        return;
    }
    jsonwebtoken_1.default.verify(token, kEY, (err, decoded) => {
        if (err) {
            res.status(403).json({
                message: "Invalid or expired token",
            });
            return;
        }
        req.body.users = decoded;
        console.log("Token is valid:", decoded);
        next();
    });
});
