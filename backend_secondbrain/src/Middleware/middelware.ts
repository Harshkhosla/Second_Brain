import { NextFunction, Request, Response } from "express";
import Jwt, { JwtPayload } from "jsonwebtoken";
const kEY = "harsh"


export interface CustomRequest extends Request {
    user?: string | JwtPayload;
}



export class middleware {


public static Middleware= async(req: CustomRequest, res: Response, next: NextFunction)=> {
    
    const token = req.headers.authorization?.split(' ').at(1);
    if (!token) {
        res.status(401).json({
            message: "No token present"
        })
        return;
    }

    Jwt.verify(token, kEY, (err, decoded) => {
        if (err) {
            res.status(403).json({
                message: "Invalid or expired token",
            });
            return;
        }

        req.body.users = decoded;
        req.body.token=token
        console.log("Token is valid:", decoded);
        next();
    })

}

}



