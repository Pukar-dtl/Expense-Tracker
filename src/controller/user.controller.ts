import type { Request, Response } from "express";
import { loginUser, registerUser } from "../service/user.service.js";
import response from "../utils/response.js";

interface Register {
  name: string;
  email: string;
  password: string;
}

interface Login {
  email: string;
  password: string;
}

export const register = async (req: Request, res: Response) => {
  const { name, email, password }: Register = req.body;

  await registerUser(name, email, password);

  return response(res, 201, "User registered");
};

export const login = async (req: Request, res: Response) => {
  const { email, password }: Login = req.body;

  const logintoken = await loginUser(email, password);

  if (!logintoken) {
    throw new Error("login failed");
  }
  console.log(logintoken);

  return response(res, 201, "Login successful", logintoken);
};
