import express from "express";
import cors from 'cors';
import bodyParser from "body-parser";
import { client } from "./db-connection/connection.js";

const app = express();

app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());

const port = process.env.PORT || 5000;

await client.connect()
            .then(()=>{
                app.listen(port,()=> console.log(`database connected and server running on port ${port}`))
            })
            .catch((error)=> console.log("error occured: ", error))