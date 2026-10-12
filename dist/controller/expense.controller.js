import {} from "express";
import jwtver from "../utils/jwt.verify.js";
import { addExpense, editExpense, findExpense } from "../service/expense.service.js";
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
export const expenseSearch = async (req, res) => {
    const userToken = req.headers.authorization;
    if (typeof userToken === "undefined") {
        throw new Error("Authorization token not availaible");
    }
    const Userid = await jwtver(userToken);
    const { heading } = req.body;
    if (!heading) {
        throw new Error("Empty request body");
    }
    const data = await findExpense(heading, Userid);
    return response(res, 200, "expenses found", data);
};
export const expenseUpdate = async (req, res) => {
    const userToken = req.headers.authorization;
    if (typeof userToken === "undefined") {
        throw new Error("Authorization token not availaible");
    }
    const { heading, amount, id } = req.body;
    const updateResult = await editExpense(heading, amount, id);
    if (updateResult) {
        return response(res, 201, "Expense updated successfully");
    }
};
//# sourceMappingURL=expense.controller.js.map