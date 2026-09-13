import express from "express";
import userRoutes from "./routes/cadastro.js";
import loginRoutes from "./routes/login.js";
import dashboardRoutes from "./routes/dashboard.js";
import logoutRoutes from "./routes/logout.js";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

const app = express();
dotenv.config();
app.use(express.json());
app.use(cors({
    origin: process.env.FRONTEND_URL,
    credentials: true
}));
app.use(cookieParser());

app.use("/register",userRoutes);
app.use("/login",loginRoutes);
app.use("/dashboard",dashboardRoutes);
app.use("/logout", logoutRoutes);

app.listen(process.env.PORT || 3000);