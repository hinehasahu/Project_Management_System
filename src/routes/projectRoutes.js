import express from "express";
import { authMiddleware } from "../middlewares/authMiddleware.js";
import {
  createProject,
  deleteProject,
  getProjectById,
  getProjects,
  updateProject,
} from "../controllers/projectController.js";
import { roleMiddleware } from "../middlewares/roleMiddleware.js";

export const ProjectRouter = express.Router();

ProjectRouter.get("/", authMiddleware, getProjects);

ProjectRouter.get("/:id", authMiddleware, getProjectById);

ProjectRouter.post(
  "/create",
  authMiddleware,
  roleMiddleware("manager", "admin"),
  createProject,
);

ProjectRouter.put(
  "/:id",
  authMiddleware,
  roleMiddleware("manager", "admin"),
  updateProject,
);

ProjectRouter.delete(
  "/:id",
  authMiddleware,
  roleMiddleware("manager", "admin"),
  deleteProject,
);
