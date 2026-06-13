import express from "express";
import { login, logout, signup } from "../controllers/userController.js";

export const UserRouter = express.Router();

UserRouter.post("/register", signup);

UserRouter.post("/login", login);

UserRouter.post("/logout", logout);
