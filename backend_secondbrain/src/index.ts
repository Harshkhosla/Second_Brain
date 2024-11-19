import express from "express"
import cors from "cors"
import { ConnectToMongo } from "./db/db";
import { api } from "./route/api";

const PORT = 5200;

const app = express();

app.use(express.json());
app.use(cors())
ConnectToMongo()


// app.use('/api/v1/auth',authRoute);
// app.use('/api/v1/content',ContentRoute);
app.use('/api/v1', api)

app.listen(PORT,()=>{
    console.log("listning to port",PORT);
})