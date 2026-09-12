import { db } from "../db.js";
import bcrypt from "bcrypt";

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
        return res.status(500).json({error: error.message});
    }}

    export const getUser = async (req, res) => {
        try{
        const { email, password } = req.body;

        const sql = "SELECT * FROM users WHERE email_usuario = ?";

        db.query(sql, [email], async (err, data) => {
            if (err) {
                return res.status(500).json({ error: err.message });
            }

            if (data.length === 0) {
                return res.status(401).json({ error: "Invalid email or password" });
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

            return res.status(200).json({ success: true, message: "User logged in successfully", userId: user.id });

        });}catch (error) {
        return res.status(500).json({error: error.message});}
    }