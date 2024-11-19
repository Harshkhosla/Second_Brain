import { Request, Response } from "express";
import { ContentDetails } from "../../modals/ContentSchema";
import { Tags } from "../../modals/TagsSchema";
import { UserDetails } from "../../modals/User";

export class ContentRoutes{

    public static content =async (req:Request, res:Response)=>{
        try {
            const { type, link, title, tags, users } = req.body;
            // const userdetails = req.user;   
            console.log(req.body);
            const userEmail = users.UserDetailsfound
             
            const UserFind = await UserDetails.findOne({ email: userEmail.email });
    
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
    }



    public static GetAllContent= async(req:Request, res:Response)=>{
        try{
            const users = req.body.users.UserDetailsfound;

            console.log(users);

            const BrainDetails = await ContentDetails.find({userId:users._id}).populate("tags")
            console.log(BrainDetails);
            
            res.status(200).json({
                message:BrainDetails
            })
            
            
        }catch(error){
            console.log(error);
            res.status(500).json({
                error
            })
            return;
        }
    }


    public static Deletecontent= async(req:Request, res:Response)=> {
        

    }


}