import mongoose from 'mongoose';
import dotenv from 'dotenv';

console.log(process.env.MONGO_URI);
dotenv.config({path:"../.env"});

const connectDB = async() =>{
    try{
        const connection = await mongoose.connect(process.env.MONGO_URI);
        console.log('MongoDB connected successfully');
    }catch(error){
        console.error("MongoDB connection error: ", error.message);
    }
};
export default connectDB;