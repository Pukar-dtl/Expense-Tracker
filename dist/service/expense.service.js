import searchUser from "../utils/searchUser.js";
import expenseModel from "../models/expense.model.js";
export const addExpense = async (heading, amount, id) => {
    if (!heading || amount <= 0 || !id) {
        return false;
    }
    const searcRes = await searchUser(id);
    if (!searcRes) {
        throw new Error("User not found");
    }
    const newExpense = await expenseModel.insertOne({
        heading,
        amount,
        user: id
    });
    await newExpense.save();
    return true;
};
export const findExpense = async (heading, id) => {
    const expenses = await expenseModel
        .find({ heading, user: id })
        .select("-user -__v");
    if (expenses.length === 0) {
        throw new Error("Expense of the given heading not found");
    }
    return expenses;
};
export const findAllExpense = async (id) => {
    const expenses = await expenseModel.find({ user: id });
    if (expenses.length === 0) {
        throw new Error("Expense not found");
    }
    return expenses;
};
export const editExpense = async (heading, amount, id) => {
    const expense = await expenseModel.findByIdAndUpdate(id, {
        heading,
        amount
    });
    if (!expense) {
        throw new Error("expense id not found");
    }
    return true;
};
export const deleteExpense = async (id) => {
    const deleted = await expenseModel.findByIdAndDelete(id);
    if (!deleted) {
        return false;
    }
    return true;
};
//# sourceMappingURL=expense.service.js.map