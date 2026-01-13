import express from "express";
import { loginUser, registerUser } from "../controllers/authController.js";

const router = express.Router();

router.post("/login", loginUser);       // login endpoint
router.post("/register", registerUser); // register endpoint

export default router;



