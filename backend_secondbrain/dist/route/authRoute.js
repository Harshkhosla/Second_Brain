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
Object.defineProperty(exports, "__esModule", { value: true });
exports.authRoute = void 0;
const express_1 = require("express");
const zod_1 = require("../utils/zod");
const User_1 = require("../modals/User");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const route = (0, express_1.Router)();
route.post('/signup', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const body = req.body;
        const bodypardes = zod_1.UserSchema.safeParse(body);
        if (!bodypardes.success) {
            res.status(411).json({
                message: `${bodypardes.error.errors[0].message}`
            });
            return;
        }
        const { email, username, password } = req.body;
        const Emailexists = yield User_1.UserDetails.find({ email: email });
        console.log(Emailexists);
        if (!Emailexists) {
            res.status(403).json({
                message: "User already exists with this email"
            });
            return;
        }
        const hashpassword = yield bcryptjs_1.default.hash(password, 10);
        const UserCreated = yield User_1.UserDetails.create({
            email: email,
            username: username,
            password: hashpassword
        });
        console.log(UserCreated);
        res.status(201).json({
            message: `User have been created `,
            UserCreated
        });
        return;
    }
    catch (error) {
        console.error(error);
        res.status(500).json({
            message: "Server error",
            error
        });
        return;
    }
}));
exports.authRoute = route;
