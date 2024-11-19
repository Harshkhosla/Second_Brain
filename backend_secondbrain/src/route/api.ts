import { Router } from "express";
import { ContentRoutes } from "./content/routes";
import { ContentRouter } from "./content";
import { AuthRouter } from "./auth";

export const api = Router();


api.use('/auth',new AuthRouter().router)
api.use('/brain',new ContentRouter().router)


