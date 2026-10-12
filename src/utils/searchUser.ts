import userModel from "../models/user.model.js";

const searchUser = async (id: string): Promise<boolean> => {
  const user = await userModel.findById(id);

  if (!user) {
    return false;
  }

  return true;
};

export default searchUser;