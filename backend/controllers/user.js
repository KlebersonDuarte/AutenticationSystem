import { db } from "./db.js";
import bcrypt from "bcrypt";
import {createToken} from "../middleware/authentication.js";

export const postUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const hash = await bcrypt.hash(password, 10);
        const sql = "INSERT INTO users (nome_usuario, email_usuario, senha_usuario) VALUES (?, ?, ?)";


        db.query(sql, [name, email, hash], (err, data) => {
            if (err) {
                return res.status(500).json({ error: err.message });
            }

            console.log("User registered successfully");
            return res.status(200).json({ success: true, message: "User registered successfully", userId: data.insertId });
        });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

export const getUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        const sql = "SELECT * FROM users WHERE email_usuario = ?";

        db.query(sql, [email], async (err, data) => {
            if (err) {
                return res.status(500).json({ error: err.message });
            }

            if (data.length === 0) {
                return res.status(401).json({ error: "Email ou senha inválidos" });
            }

            const user = data[0];

            const passwordCorrect = await bcrypt.compare(
                password,
                user.senha_usuario
            );

            if (!passwordCorrect) {
                return res.status(401).json({
                    error: "Invalid email or password"
                });
            }

            const token = createToken({ id: user.id_usuario});

             res.cookie("access_token", token, {
                httpOnly: true,
                secure: false,
                sameSite: "lax",
                maxAge: 60 * 60 * 1000,
                path: "/"
            });


            return res.status(200).json({ success: true, message: "Usuário logado com sucesso"});

        });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}