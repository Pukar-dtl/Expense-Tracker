import searchUser from "../utils/searchUser.js";
import expenseModel from "../models/expense.model.js";

export const addExpense = async (
  heading: string,
  amount: number,
  id: string
): Promise<boolean> => {
  if (!heading || amount <= 0 || !id) {
    return false;
  }
  const searcRes: boolean = await searchUser(id);
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

export const findExpense = async (heading: string, id: string) => {
  const expenses = await expenseModel
    .find({ heading, user: id })
    .select("-user -__v");

  if (expenses.length === 0) {
    throw new Error("Expense of the given heading not found");
  }

  return expenses;
};

export const findAllExpense = async (id: string) => {
  const expenses = await expenseModel.find({ user: id });

  if (expenses.length === 0) {
    throw new Error("Expense not found");
  }

  return expenses;
};

export const editExpense = async (
  heading: string,
  amount: number,
  id: string
): Promise<boolean> => {
  const expense = await expenseModel.findByIdAndUpdate(id, {
    heading,
    amount
  });

  if (!expense) {
    throw new Error("expense id not found");
  }

  return true;
};

export const deleteExpense = async (id: string): Promise<boolean> => {
  const deleted = await expenseModel.findByIdAndDelete(id);

  if (!deleted) {
    return false;
  }

  return true;
};
