import { ParseStatus, z } from "zod";


export const UserSchema = z.object({
    email: z.string().email(),
    username: z.string(),
    password: z.string().min(3)
})

export const UserSignin = z.object({
    email: z.string().email(),
    password: z.string().min(3)
})
// export const Content= z.object({
//     type:z.string()

// })