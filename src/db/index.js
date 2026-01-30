import mongoose from 'mongoose';
import dotenv from 'dotenv';


const connectDB = async (MONGODB_URL) => {
    try {
        await mongoose.connect(MONGODB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("MongoDB connected successfully");
    } catch (error) {
        console.error("MongoDB connection error:", error);
        throw error;
    }       
};

export { connectDB };
