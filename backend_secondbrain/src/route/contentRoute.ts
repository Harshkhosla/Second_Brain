import { Router } from "express";
import middleware from "../Middleware/middelware";
import { UserDetails } from "../modals/User";
import { ContentDetails } from "../modals/ContentSchema";
import { Tags } from "../modals/TagsSchema";

const route = Router();



route.post('/create', middleware, async (req, res) => {
    try {
        const { type, link, title, tags, users } = req.body;
        // const userdetails = req.user;


        const UserFind = await UserDetails.findOne({ email: users.email });

        if (!UserFind) {
            res.status(404).json({
                message: "User Not found"
            })
        }

        const TagsCreated = await Promise.all(

            tags.map(async (data: string) => {

                const existingTag = await Tags.findOne({ title: data });
                if (existingTag) return existingTag._id;


                const newTag = await Tags.create({ title: data });
                return newTag._id;
            })

        )
        console.log(TagsCreated);

        const ContentCreated = await ContentDetails.create({
            link: link,
            type: type,
            title: title,
            tags: TagsCreated,
            userId: UserFind?._id
        })

        res.status(201).json({
            message: "Your content is ready",
            ContentCreated
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