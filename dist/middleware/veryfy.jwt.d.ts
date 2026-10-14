import type { Request, Response, NextFunction } from "express";
interface AuthRequest extends Request {
    userId?: string;
}
declare const verifyjwt: (req: AuthRequest, res: Response, next: NextFunction) => Response<any, Record<string, any>> | undefined;
export default verifyjwt;
//# sourceMappingURL=veryfy.jwt.d.ts.map