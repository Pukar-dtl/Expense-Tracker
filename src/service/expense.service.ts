import userModel from "../models/user.model.js";
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
  const searcRes : boolean = await searchUser(id);
  if(!searcRes){
    throw new Error("User not found");
  }

  const newExpense = await expenseModel.insertOne({
    heading,
    amount,
    user : id
  });

  await newExpense.save();

  return true;
};
