import express from "express"
import cors from "cors"
import { authRoute } from "./route/authRoute";

const PORT = 5200;

const app = express();

app.use(express.json());
app.use(cors())


app.use('/api/v1/',authRoute);

app.listen(PORT,()=>{
    console.log("listning to port",PORT);
})