import mongoose, { Schema } from "mongoose";
const ExpenseSchema = new Schema({
    heading: { type: String, required: true },
    amount: { type: Number, required: true },
    user: { type: Schema.Types.ObjectId, required: true, ref: "User" }
});
export default mongoose.model('Expense', ExpenseSchema);
//# sourceMappingURL=expense.model.js.map