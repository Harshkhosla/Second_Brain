import { NextFunction, Request, Response } from "express";
import Jwt, { JwtPayload } from "jsonwebtoken";
const kEY = "harsh"


interface CustomRequest extends Request {
    user?: string | JwtPayload;
}

function middleware(req: CustomRequest, res: Response, next: NextFunction): void {



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

        req.user = decoded;
        console.log("Token is valid:", decoded);
        next();
    })

}

export default middleware;