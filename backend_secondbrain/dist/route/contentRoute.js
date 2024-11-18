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
exports.ContentRoute = void 0;
const express_1 = require("express");
const middelware_1 = __importDefault(require("../Middleware/middelware"));
const route = (0, express_1.Router)();
route.post('/create', middelware_1.default, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { type, link, title, tags } = req.body;
        res.status(201).json({
            message: "Your content is ready"
        });
        return;
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            error
        });
        return;
    }
}));
exports.ContentRoute = route;
