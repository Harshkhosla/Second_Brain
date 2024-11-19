import { Router } from "express";
import { AuthRoutes } from "./routes";


export class  AuthRouter {
router :Router;
constructor(){
    this.router = Router();
    this.router.post('/signup',AuthRoutes.register)
    this.router.post('/signin',AuthRoutes.login)
}
}