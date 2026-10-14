import { expenseAdd, expenseAllByUser, expenseDelete, expenseSearch, expenseUpdate } from "../controller/expense.controller.js";
import loggerMidleware from "../middleware/loggerMiddleware.js";
import verifyjwt from "../middleware/veryfy.jwt.js";
import asyncWrapper from "../utils/asyncWrapper.js";
import express from "express";
const app = express();
app.post("/add", loggerMidleware, verifyjwt, asyncWrapper(expenseAdd));
app.post("/search", loggerMidleware, verifyjwt, asyncWrapper(expenseSearch));
app.put("/update", loggerMidleware, verifyjwt, asyncWrapper(expenseUpdate));
app.delete("/delete", loggerMidleware, verifyjwt, asyncWrapper(expenseDelete));
app.get("/all", loggerMidleware, verifyjwt, asyncWrapper(expenseAllByUser));
export default app;
//# sourceMappingURL=expense.route.js.map