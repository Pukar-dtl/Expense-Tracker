import userModel from "../models/user.model.js";
const searchUser = async (id) => {
    const user = await userModel.findById(id);
    if (!user) {
        return false;
    }
    return true;
};
export default searchUser;
//# sourceMappingURL=searchUser.js.map