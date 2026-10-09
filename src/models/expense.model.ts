import mongoose, { Schema } from "mongoose";

interface Expense {
  heading: string;
  amount: number;
  user: mongoose.Types.ObjectId;
}

const ExpenseSchema = new Schema<Expense>({
  heading: { type: String, required: true },
  amount: { type: Number, required: true },
  user: { type: Schema.Types.ObjectId, required: true, ref: "User" }
});

export default mongoose.model<Expense>('Expense', ExpenseSchema);