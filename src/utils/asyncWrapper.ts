import type { Request, Response, NextFunction } from "express";

const asyncWrapper = (
  controller: (req: Request, res: Response, next: NextFunction) => Promise<void>
) => {
  return (req: Request, res: Response, next: NextFunction)=>{
    controller(req, res, next).catch(next)
  }
};

export default asyncWrapper;