import { type Request, type Response } from "express";
import {
  addExpense,
  deleteExpense,
  editExpense,
  findExpense,
  findAllExpense
} from "../service/expense.service.js";
import response from "../utils/response.js";

export const expenseAdd = async (req: Request, res: Response) => {
  const { heading, amount } = req.body;

  const Userid = req.userId!;

  const result: boolean = await addExpense(heading, amount, Userid);
  if (result === false) {
    return response(res, 500, "Internal server error");
  } else {
    return response(res, 201, "Expense added succesfully");
  }
};

export const expenseSearch = async (req: Request, res: Response) => {
  const Userid = req.userId!;

  const { heading } = req.body;

  if (!heading) {
    throw new Error("Empty request body");
  }

  const data = await findExpense(heading, Userid);

  return response(res, 200, "expenses found", data);
};

export const expenseUpdate = async (req: Request, res: Response) => {
  const { heading, amount, id } = req.body;

  const updateResult = await editExpense(heading, amount, id);

  if (updateResult) {
    return response(res, 201, "Expense updated successfully");
  }
};

export const expenseDelete = async (req: Request, res: Response) => {
  const { id } = req.body;

  const sucess = await deleteExpense(id);

  if (sucess === false) {
    return response(res, 500, "Something went wrong");
  }
  return response(res, 201, "expense deleted sucessfully");
};

export const expenseAllByUser = async (req: Request, res: Response) => {
  const Userid = req.userId!;

  const data = await findAllExpense(Userid);

  return response(res, 200, "expenses found", data);
};
