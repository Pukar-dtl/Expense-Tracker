import { expenseAdd, expenseSearch } from "../controller/expense.controller.js";
import loggerMidleware from "../middleware/loggerMiddleware.js";
import asyncWrapper from "../utils/asyncWrapper.js";
import express from "express";
const app = express();
app.post('/add', loggerMidleware, asyncWrapper(expenseAdd));
app.post('/search', loggerMidleware, asyncWrapper(expenseSearch));
export default app;
//# sourceMappingURL=expense.route.js.map