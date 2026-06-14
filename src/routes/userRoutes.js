import express from "express";
import {
  getAllUsers,
  getUserById,
  login,
  logout,
  signup,
  updateProfile,
  updateUserRole,
} from "../controllers/userController.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";
import { roleMiddleware } from "../middlewares/roleMiddleware.js";

export const UserRouter = express.Router();

UserRouter.post("/register", signup);

UserRouter.post("/login", login);

UserRouter.post("/logout", logout);

UserRouter.get(
  "/",
  authMiddleware,
  roleMiddleware("manager", "admin"),
  getAllUsers,
);

UserRouter.get(
  "/:id",
  authMiddleware,
  roleMiddleware("manager", "admin"),
  getUserById,
);

UserRouter.put(
  "/:id",
  authMiddleware,
  roleMiddleware("manager", "admin"),
  updateProfile,
);

UserRouter.patch(
  "/:id/role",
  authMiddleware,
  roleMiddleware("admin"),
  updateUserRole,
);
