"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const authRoute_1 = require("./route/authRoute");
const db_1 = require("./db/db");
const contentRoute_1 = require("./route/contentRoute");
const PORT = 5200;
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
(0, db_1.ConnectToMongo)();
app.use('/api/v1/auth', authRoute_1.authRoute);
app.use('/api/v1/content', contentRoute_1.ContentRoute);
app.listen(PORT, () => {
    console.log("listning to port", PORT);
});
