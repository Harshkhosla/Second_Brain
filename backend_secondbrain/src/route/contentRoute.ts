import { Router } from "express";
import middleware from "../Middleware/middelware";

const route = Router();



route.post('/create', middleware, async (req, res) => {
    try {
        const { type, link, title, tags } = req.body;


        res.status(201).json({
            message: "Your content is ready"
        })
        return; 

    } catch (error) {
        console.log(error);
        res.status(500).json({
            error
        })
        return;
    }
})
export const ContentRoute = route;