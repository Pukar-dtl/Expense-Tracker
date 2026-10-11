import userModel from "../models/user.model.js";

export const addExpense = (heading: string, amount: number, id: string) => {
  const user = userModel.findById(id);
};
