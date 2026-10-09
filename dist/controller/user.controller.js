import { loginUser, registerUser } from "../service/user.service.js";
import response from "../utils/response.js";
export const register = async (req, res) => {
    const { name, email, password } = req.body;
    await registerUser(name, email, password);
    return response(res, 201, "User registered");
};
export const login = async (req, res) => {
    const { email, password } = req.body;
    const logintoken = loginUser(email, password);
    if (!logintoken) {
        throw new Error("login failed");
    }
    return response(res, 201, "Login successful", logintoken);
};
//# sourceMappingURL=user.controller.js.map