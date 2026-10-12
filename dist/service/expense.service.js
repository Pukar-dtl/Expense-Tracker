import userModel from "../models/user.model.js";
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
    const expenses = await expenseModel.find({ heading, user: id });
    if (!expenses) {
        throw new Error("Expense of the given heading not found");
    }
    return expenses;
};
//# sourceMappingURL=expense.service.js.map