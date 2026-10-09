import User from "../models/user.model.js";
import bcrypt from "bcrypt";

export const registerUser = async (name: string, email: string, password: string) => {
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
