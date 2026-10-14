import userController from "./routes/usr.route.js";
import expenseController from './routes/expense.route.js'
import express from "express";
import { configDotenv } from "dotenv";
import logger from "./config/logger.js";
import connectMongo from "./config/db.js";
import errorHandler from "./middleware/errorhandlere.js";

configDotenv();
connectMongo();

const app = express();
app.use(express.json());

app.use('/user', userController);
app.use('/expense', expenseController);
app.get("/", (_req, res) => {
    res.send("Server on");
});
app.use(errorHandler);

const port = process.env.PORT;
app.listen(port, ()=>{
    logger.info(`port running on ${port}`)
})