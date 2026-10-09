import type { Request, Response, NextFunction } from "express";
declare const asyncWrapper: (controller: (req: Request, res: Response, next: NextFunction) => Promise<void>) => (req: Request, res: Response, next: NextFunction) => void;
export default asyncWrapper;
//# sourceMappingURL=asyncWrapper.d.ts.map