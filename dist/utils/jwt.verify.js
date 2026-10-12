import jwt from "jsonwebtoken";
const verifyjwt = (token) => {
    const jwtVer = process.env.jwtsecret;
    if (!jwtVer) {
        throw new Error("jwt secret is not configured");
    }
    const decoded = jwt.verify(token, jwtVer);
    if (typeof decoded === "string" || !decoded.id) {
        throw new Error("Incorrect token or secret");
    }
    const id = decoded.id.toString();
    return id;
};
export default verifyjwt;
//# sourceMappingURL=jwt.verify.js.map