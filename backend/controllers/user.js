import {db} from "../db.js";
import bcrypt from "bcryptjs";

export const postUser = (req, res) => {
    const { name, email, password } = req.body;
    const salt = bcrypt.genSaltSync(10);
    const sql = "INSERT INTO users (nome_usuario, email_usuario, senha_usuario) VALUES (?, ?, ?)";


    db.query(sql, [name, email, salt], (err, data) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }

        console.log("User registered successfully");
       return res.status(200).json({success: true, message: "User registered successfully",userId: data.insertId}); 
    });
}