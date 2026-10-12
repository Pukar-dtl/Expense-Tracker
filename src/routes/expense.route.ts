import { expenseAdd, expenseSearch, expenseUpdate } from "../controller/expense.controller.js";
import loggerMidleware from "../middleware/loggerMiddleware.js";
import asyncWrapper from "../utils/asyncWrapper.js";
import express from "express";

const app = express();

app.post("/add", loggerMidleware, asyncWrapper(expenseAdd));
app.post("/search", loggerMidleware, asyncWrapper(expenseSearch));
app.put("/update", loggerMidleware, asyncWrapper(expenseUpdate));

export default app;
