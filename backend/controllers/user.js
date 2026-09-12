import {db} from "../db.js";

export const postUser = (req, res) => {
    const { name, email, password } = req.body;
    const sql = "INSERT INTO users (nome_usuario, email_usuario, senha_usuario) VALUES (?, ?, ?)";


    db.query(sql, [name, email, password], (err, data) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }

        console.log("User registered successfully");
       return res.status(200).json({success: true, message: "User registered successfully",userId: data.insertId}); 
    });
}