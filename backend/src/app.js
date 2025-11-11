import express from "express";
import { createServer } from "node:http";

import { Server } from "socket.io";

import mongoose from "mongoose";
import {connectTosocket} from "./controllers/socketManager.js";

import cors from "cors";
import userRouters from "./routes/users.routs.js";

const app = express();
const server = createServer(app);
const io = connectTosocket(server);

app.set("port", (process.env.PORT || 8000));
app.use(cors());
app.use(express.json({limit: "40kb"}))
app.use(express.urlencoded({limit :"40kb", extended: true }));

app.use("/api/v1/users", userRouters);


const start = async () => {
    app.set("mongo_user")
    const connectiondb = await mongoose.connect("mongodb+srv://atharvasolanke2001_db_user:191yh1YQvBdbNbJ5@cluster0.pjf80jk.mongodb.net")

    console.log ('MONGO Connected DB Host:', connectiondb.connection.host);

    server.listen(app.get("port"), () => {
        console.log("LISTEN ON PORT 8000");
    });

  };

start();
