import type { Request, Response } from "express";
import { registerUser } from "../service/user.service.js";
import response from "../utils/response.js";

interface Register {
  name: string;
  email: string;
  password: string;
}

export const register = async (req: Request, res: Response) => {
  const { name, email, password }: Register = req.body;

  await registerUser(name, email, password);

  return response(res, 201, "User registered");
};
