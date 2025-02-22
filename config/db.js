const mongoose = require("mongoose");

const MONGO_URI = "mongodb://127.0.0.1:27017/mydatabase"; // Убедись, что тут строка

const connectDB = async () => {
    try {
        await mongoose.connect(MONGO_URI);
        console.log("MongoDB connected");
    } catch (error) {
        console.error("MongoDB connection error:", error);
    }
};

module.exports = connectDB;
