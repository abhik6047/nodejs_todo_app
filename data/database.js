import mongoose from "mongoose";

export const connectDB = () => {
	mongoose
		.connect(`${process.env.MONGO_URL}`, { dbName: "backendapi" })
		.then((res) => console.log("Database connected"))
		.catch((err) => console.log(err));
};
