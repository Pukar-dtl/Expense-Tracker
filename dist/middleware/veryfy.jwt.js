import jwt from "jsonwebtoken";
const verifyjwt = (req, res, next) => {
    try {
        const token = req.headers.authorization;
        if (!token) {
            return res.status(401).json({
                message: "Authorization token is missing"
            });
        }
        const jwtSecret = process.env.jwtsecret;
        if (!jwtSecret) {
            return res.status(500).json({
                message: "JWT secret is not configured"
            });
        }
        const decoded = jwt.verify(token, jwtSecret);
        if (typeof decoded === "string" || !decoded.id) {
            return res.status(401).json({
                message: "Invalid token payload"
            });
        }
        req.userId = decoded.id.toString();
        next();
    }
    catch (error) {
        return res.status(401).json({
            message: "Invalid or expired token"
        });
    }
};
export default verifyjwt;
//# sourceMappingURL=veryfy.jwt.js.map