import mongoose from "mongoose";
async function connectMongo() {
    const connection_string = process.env.db;
    if (!connection_string) {
        throw new Error("Mongo db connection string is not present");
    }
    const connect = await mongoose.connect(connection_string);
    if (connect) {
        console.log("mongo Db connected");
    }
}
export default connectMongo;
//# sourceMappingURL=db.js.map