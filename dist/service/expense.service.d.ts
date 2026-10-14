export declare const addExpense: (heading: string, amount: number, id: string) => Promise<boolean>;
export declare const findExpense: (heading: string, id: string) => Promise<(import("mongoose").Document<unknown, {}, import("../models/expense.model.js").Expense, {}, import("mongoose").DefaultSchemaOptions> & import("../models/expense.model.js").Expense & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
} & {
    id: string;
})[]>;
export declare const findAllExpense: (id: string) => Promise<(import("mongoose").Document<unknown, {}, import("../models/expense.model.js").Expense, {}, import("mongoose").DefaultSchemaOptions> & import("../models/expense.model.js").Expense & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
} & {
    id: string;
})[]>;
export declare const editExpense: (heading: string, amount: number, id: string) => Promise<boolean>;
export declare const deleteExpense: (id: string) => Promise<boolean>;
//# sourceMappingURL=expense.service.d.ts.map