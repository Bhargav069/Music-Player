import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/connectDB.js"
import router from "./routes/authRoutes.js"
import songRouter from "./routes/songRoutes.js";

dotenv.config();
const PORT = process.env.PORT || 4000;
const app = express();
app.use(express.json());

//Connect your database
connectDB();

app.use(cors({
    origin:"http://localhost:5173",
    credentials: true,

}));

app.get("/api", (req,res) => {
    res.status(200).json({message:"Server is working"});
});

app.use("/api/songs", songRouter);
app.use("/api/auth", router);

app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`));