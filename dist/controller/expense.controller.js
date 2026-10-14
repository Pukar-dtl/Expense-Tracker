import {} from "express";
import { addExpense, deleteExpense, editExpense, findExpense, findAllExpense } from "../service/expense.service.js";
import response from "../utils/response.js";
export const expenseAdd = async (req, res) => {
    const { heading, amount } = req.body;
    const Userid = req.userId;
    const result = await addExpense(heading, amount, Userid);
    if (result === false) {
        return response(res, 500, "Internal server error");
    }
    else {
        return response(res, 201, "Expense added succesfully");
    }
};
export const expenseSearch = async (req, res) => {
    const Userid = req.userId;
    const { heading } = req.body;
    if (!heading) {
        throw new Error("Empty request body");
    }
    const data = await findExpense(heading, Userid);
    return response(res, 200, "expenses found", data);
};
export const expenseUpdate = async (req, res) => {
    const { heading, amount, id } = req.body;
    const updateResult = await editExpense(heading, amount, id);
    if (updateResult) {
        return response(res, 201, "Expense updated successfully");
    }
};
export const expenseDelete = async (req, res) => {
    const { id } = req.body;
    const sucess = await deleteExpense(id);
    if (sucess === false) {
        return response(res, 500, "Something went wrong");
    }
    return response(res, 201, "expense deleted sucessfully");
};
export const expenseAllByUser = async (req, res) => {
    const Userid = req.userId;
    const data = await findAllExpense(Userid);
    return response(res, 200, "expenses found", data);
};
//# sourceMappingURL=expense.controller.js.map