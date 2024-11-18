import {Router} from "express";
import { UserSchema } from "../utils/zod";
import { UserDetails } from "../modals/User";

const route = Router();



route.post('/signup',async(req,res)=>{
    const body = req.body;

    const bodypardes = UserSchema.safeParse(body);

    if(!bodypardes.success){
        res.status(411).json({
            message:"invalid inputs you have given"
        })
        return;
    }

    const {email,password}= req.body;

    const exists = await UserDetails.find({email:email});
    




})

export const authRoute = route