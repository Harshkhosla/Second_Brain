import { Router } from "express";
import { LinkRoutes } from "./routes";
import { middleware } from "../../Middleware/middelware";



export class LinkRouter {
    router:Router
    constructor(){
        this.router=Router()
        this.router.use(middleware.Middleware);
        this.router.get('/:brainId', LinkRoutes.GettheLink)
    }
}