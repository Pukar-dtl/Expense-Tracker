import mongoose from "mongoose";
interface Expense {
    heading: string;
    amount: number;
    user: mongoose.Types.ObjectId;
}
declare const _default: mongoose.Model<Expense, {}, {}, {}, mongoose.Document<unknown, {}, Expense, {}, mongoose.DefaultSchemaOptions> & Expense & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
} & {
    id: string;
}, any, Expense & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
export default _default;
//# sourceMappingURL=expense.model.d.ts.map