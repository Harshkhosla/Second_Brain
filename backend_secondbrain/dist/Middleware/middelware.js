"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const kEY = "harsh";
function middleware(req, res, next) {
    var _a;
    const token = (_a = req.headers.authorization) === null || _a === void 0 ? void 0 : _a.split(' ').at(1);
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
}
exports.default = middleware;
