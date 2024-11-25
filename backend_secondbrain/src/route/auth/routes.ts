import { Request, Response } from "express";
import { UserDetails } from "../../modals/User";
import { UserSchema, UserSignin } from "../../utils/zod";
import bcript from "bcryptjs"
import jwt from "jsonwebtoken"

const kEY = "harsh"

export class AuthRoutes {

    public static register = async (req:Request, res:Response)=>{
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
            
            

            if (Emailexists.length !== 0) {                
                res.status(403).json({
                    message: "User already exists with this email"
                })
                return;
            }
            
            const hashpassword = await bcript.hash(password, 10);
            console.log(email);
    
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
    }




    public static login = async (req:Request, res:Response)=>{
        try {
            const body = req.body;
            const ParsedData = UserSignin.safeParse(body)
    
            if (!ParsedData.success) {
                res.status(511).json({
                    message: ParsedData.error.errors[0].message
                })
                return;
            }
            const { email, password } = req.body;
    
            const UserDetailsfound = await UserDetails.findOne({ email: email });
            if (!UserDetailsfound) {
                res.status(404).json({
                    message: "User not found"
                });
                return;
            }
            const passwordCorrect = await bcript.compare(password, UserDetailsfound?.password)
            if (!passwordCorrect) {
    
                res.status(403).json({
                    message: "Wrong email password"
                })
                return;
            }
    
            const JWT_Token = jwt.sign({ UserDetailsfound }, kEY);
    
            res.status(200).json({
                message: "Sign-in successful",
                JWT_Token
            })
    
            return;
        }
        catch (error) {
            console.error(error);
            res.status(500).json({
                message: "Server error",
                error
            })
            return;
        }
    }
}