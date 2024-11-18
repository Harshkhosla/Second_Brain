import { Router } from "express";
import { UserSchema } from "../utils/zod";
import { UserDetails } from "../modals/User";
import bcript from "bcryptjs"

const route = Router();



route.post('/signup', async (req, res) => {
    try {


        const body = req.body;

        const bodypardes = UserSchema.safeParse(body);

        if (!bodypardes.success) {
            res.status(411).json({
                message: `${bodypardes.error.errors[0].message}`
            })
            return;
        }

        const { email, username, password } = req.body;

        const Emailexists = await UserDetails.find({ email: email });

        console.log(Emailexists);


        if (!Emailexists) {
            res.status(403).json({
                message: "User already exists with this email"
            })
            return;
        }


        const hashpassword = await bcript.hash(password, 10);

        const UserCreated = await UserDetails.create({
            email: email,
            username: username,
            password: hashpassword
        })
        console.log(UserCreated);


        res.status(201).json({
            message: `User have been created `,
            UserCreated
        })
        return
    }
    catch (error) {
        console.error(error);
        res.status(500).json({
            message: "Server error",
            error
        })
        return;
    }
})

export const authRoute = route