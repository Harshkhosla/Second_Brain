import { Request, Response } from "express";


export class LinkRoutes {




    public static GettheLink = async (req: Request, res: Response) => {
        try {
            const { brainId } = req.params;
            const { users ,token } = req.body;

            if (!brainId) {
               res.status(400).json({ error: "Brain ID is required" });
               return
            }

            const baseUrl = "https://second-brain-delta-jade.vercel.app/share";
             const shareableUrl = `${baseUrl}?token=${encodeURIComponent(
                token
            )}&brainId=${brainId}`;


             res.status(200).json({
                shareableUrl,
            });

            return

        } catch (error) {
            console.log(error);
            res.status(500).json({
                error
            })
            return;
        }
    }

}