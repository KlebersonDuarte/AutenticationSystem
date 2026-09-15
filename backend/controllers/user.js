import { db } from "../config/database.js";
import bcrypt from "bcrypt";
import { createToken } from "../middleware/authentication.js";

export const postUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const hash = await bcrypt.hash(password, 10);
        const sql = "INSERT INTO users (nome_usuario, email_usuario, senha_usuario) VALUES (?, ?, ?)";


        const [result] = await db.execute(sql, [name, email, hash]);

        console.log("User registered successfully");
        return res.status(201).json({ success: true, message: "User registered successfully", userId: result.insertId });

    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

export const getUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        const [rows] = await db.execute("SELECT * FROM users WHERE email_usuario = ?", [email]);

        if (rows.length === 0) {
            return res.status(401).json({ error: "Email or password is incorrect" });
        }

        const user = rows[0];


        const passwordCorrect = await bcrypt.compare(
            password,
            user.senha_usuario
        );

        if (!passwordCorrect) {
            return res.status(401).json({
                error: "Email or password is incorrect"
            });
        }

        const token = createToken({ id: user.id_usuario, name: user.nome_usuario, email: user.email_usuario });

        res.cookie("access_token", token, {
            httpOnly: true,
            secure: true,
            sameSite: "lax",
            maxAge: 60 * 60 * 1000,
            path: "/"
        });

        return res.status(200).json({ success: true, message: "User logged in successfully" });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

export const logout = (req, res) => {
    res.clearCookie("access_token", {
        httpOnly: true,
        secure: true,
        sameSite: "lax",
        "path": "/"
    });
    return res.status(200).json({ success: true, message: "User logged out successfully" });
}