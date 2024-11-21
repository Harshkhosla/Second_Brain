import { Router } from "express";
import { ContentRoutes } from "./content/routes";
import { ContentRouter } from "./content";
import { AuthRouter } from "./auth";
import { LinkRouter } from "./link";

export const api = Router();


api.use('/auth',new AuthRouter().router)
api.use('/brain',new ContentRouter().router)
api.use('/link',new LinkRouter().router)


