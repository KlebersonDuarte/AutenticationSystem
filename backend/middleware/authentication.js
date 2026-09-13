import jwt from "jsonwebtoken";
import env from "dotenv";

env.config();

export const createToken = (payload) => {

    const token = jwt.sign(
        payload, 
        process.env.JWT_SECRET, 
        { expiresIn: "1h" });
    return token;
}

export const verifyToken = (req,res,next) => { 
    const token = req.cookies.acess_token;

    if (!token) {
        return res.status(401).json({
            error: "Token não fornecido"
        });
    }

    try {

        const user = jwt.verify(
            token,
            process.env.JWT_SECRET
        );

        req.user = user;

        next();

    } catch (error) {

        return res.status(401).json({
            error: "Token inválido ou expirado"
        });
    }
};