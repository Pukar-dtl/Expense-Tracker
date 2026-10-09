import userController from "./routes/usr.route.js";
import express from "express";
import { configDotenv } from "dotenv";
import logger from "./config/logger.js";
import connectMongo from "./config/db.js";

configDotenv();
connectMongo();

const app = express();
app.use(express.json());

app.use('/user', userController);
app.get("/", (_req, res) => {
    res.send("Server works");
});

const port = process.env.PORT;
app.listen(port, ()=>{
    logger.info(`port running on ${port}`)
})