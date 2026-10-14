import type { Request, Response, NextFunction } from "express";
import logger from "../config/logger.js";
import response from "../utils/response.js";

export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  logger.error(err);

  return response(res, 500, err.message || "Internal server error");
};

export default errorHandler;