import {} from "express";
import jwtver from "../utils/jwt.verify.js";
import { addExpense } from "../service/expense.service.js";
import response from "../utils/response.js";
export const expenseAdd = async (req, res) => {
    const { heading, amount } = req.body;
    const userToken = req.headers.authorization;
    if (typeof userToken === "undefined") {
        throw new Error("Authorization token not availaible");
    }
    const Userid = await jwtver(userToken);
    const result = await addExpense(heading, amount, Userid);
    if (result === false) {
        return response(res, 500, "Internal server error");
    }
    else {
        return response(res, 201, "Expense added succesfully");
    }
};
//# sourceMappingURL=expense.controller.js.map