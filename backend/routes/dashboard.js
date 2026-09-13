import express from "express";
import { verifyToken } from "../middleware/authentication.js";

const router = express.Router();

router.get("/", verifyToken, (req, res) => {

    res.json({
        message: "Você está autenticado!",
        user: req.user
    });

});

export default router;

