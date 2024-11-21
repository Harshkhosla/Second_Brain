"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const db_1 = require("./db/db");
const api_1 = require("./route/api");
const PORT = 5001;
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
(0, db_1.ConnectToMongo)();
// app.use('/api/v1/auth',authRoute);
// app.use('/api/v1/content',ContentRoute);
app.use('/api/v1', api_1.api);
app.listen(PORT, () => {
    console.log("listning to port", PORT);
});
