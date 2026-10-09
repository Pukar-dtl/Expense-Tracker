import loggerMidleware from "../middleware/loggerMiddleware.js";
import { register } from "../controller/user.controller.js";
import express from "express";
import asyncWrapper from "../utils/asyncWrapper.js";

const app = express();

app.post('/register', loggerMidleware, asyncWrapper(register));

export default app;
