import mongoose from "mongoose";
interface User {
    name: string;
    email: string;
    password: string;
}
declare const _default: mongoose.Model<User, {}, {}, {}, mongoose.Document<unknown, {}, User, {}, mongoose.DefaultSchemaOptions> & User & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
} & {
    id: string;
}, any, User & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
export default _default;
//# sourceMappingURL=user.model.d.ts.map