"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserSignin = exports.UserSchema = void 0;
const zod_1 = require("zod");
exports.UserSchema = zod_1.z.object({
    email: zod_1.z.string().email(),
    username: zod_1.z.string(),
    password: zod_1.z.string().min(3)
});
exports.UserSignin = zod_1.z.object({
    email: zod_1.z.string().email(),
    password: zod_1.z.string().min(3)
});
// export const Content= z.object({
//     type:z.string()
// })
