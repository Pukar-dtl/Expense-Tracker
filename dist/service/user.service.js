import User from "../models/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
export const registerUser = async (name, email, password) => {
    const userext = await User.findOne({ email });
    if (userext) {
        throw new Error("user already exists");
    }
    const hashedpass = await bcrypt.hash(password, 10);
    const user = new User({
        name,
        email,
        password: hashedpass
    });
    await user.save();
};
export const loginUser = async (email, password) => {
    const existingUser = await User.findOne({ email });
    if (!existingUser) {
        throw new Error("Incorrect email credentials");
    }
    const decoded_pass = await bcrypt.compare(password, existingUser.password);
    if (!decoded_pass) {
        throw new Error("Incorrect password");
    }
    const jwtSecret = process.env.jwtsecret;
    const jwtEXP = process.env.jwtEXP;
    if (!jwtSecret || !jwtEXP) {
        throw new Error("jwtSecret or jwtEXP is not defined in environment variables");
    }
    const token = jwt.sign({ id: existingUser._id }, jwtSecret, {
        expiresIn: jwtEXP
    });
    return token;
};
//# sourceMappingURL=user.service.js.map