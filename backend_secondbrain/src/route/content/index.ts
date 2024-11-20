import { Router } from "express";
import { ContentRoutes } from "./routes";
import { middleware } from "../../Middleware/middelware";

export class ContentRouter{
    router :Router
    constructor(){
        this.router = Router()
        this.router.use(middleware.Middleware)
        this.router.post('/create',ContentRoutes.content)
        this.router.get('/getall',ContentRoutes.GetAllContent)
        this.router.delete('/delete/:id',ContentRoutes.Deletecontent)

    }
}