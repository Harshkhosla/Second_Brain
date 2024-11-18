import {z} from "zod";


export const UserSchema = z.object({
    email:z.string().email(),
    username:z.string(),
    password:z.string().min(3)
})