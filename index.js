import express from "express";
import dotenv from "dotenv";
import { ConnectDB } from "./src/configs/db.js";
dotenv.config();
import { UserRouter } from "./src/routes/userRoutes.js";
import { ProjectRouter } from "./src/routes/projectRoutes.js";
import { errorHandler } from "./src/middlewares/errorMiddleware.js";
import cookieParser from "cookie-parser";

const app = express();
app.use(express.json());
app.use(cookieParser())

ConnectDB();

app.use("/users", UserRouter);
app.use("/projects", ProjectRouter);

app.use((req, res, next) => {
  const error = new Error("Route not found!");
  error.statusCode = 404;

  next(error);
});

app.use(errorHandler);
const Port = process.env.PORT;

app.listen(Port, () => {
  console.log(`Server started on http://localhost:${Port}`);
});
