import express from "express"
import cors from "cors"
import { authRoute } from "./route/authRoute";
import { ConnectToMongo } from "./db/db";
import { ContentRoute } from "./route/contentRoute";

const PORT = 5200;

const app = express();

app.use(express.json());
app.use(cors())
ConnectToMongo()


app.use('/api/v1/auth',authRoute);
app.use('/api/v1/content',ContentRoute);

app.listen(PORT,()=>{
    console.log("listning to port",PORT);
})