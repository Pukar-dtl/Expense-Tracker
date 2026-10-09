import { registerUser } from "../service/user.service.js";
import response from "../utils/response.js";
export const register = async (req, res) => {
    const { name, email, password } = req.body;
    await registerUser(name, email, password);
    return response(res, 201, "User registered");
};
//# sourceMappingURL=user.controller.js.map