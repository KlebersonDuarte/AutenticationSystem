import express from "express";
import userRoutes from "./routes/cadastro.js";
import loginRoutes from "./routes/login.js";
import cors from "cors";
const app = express();

app.use(express.json());
app.use(cors());

app.use("/register",userRoutes);
app.use("/login",loginRoutes);

app.listen(3000);