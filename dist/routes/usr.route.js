import loggerMidleware from "../middleware/loggerMiddleware.js";
import { login, register } from "../controller/user.controller.js";
import express from "express";
import asyncWrapper from "../utils/asyncWrapper.js";
const app = express();
app.post('/register', loggerMidleware, asyncWrapper(register));
app.post('/login', loggerMidleware, asyncWrapper(login));
export default app;
//# sourceMappingURL=usr.route.js.map