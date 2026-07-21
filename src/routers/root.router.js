import express from "express";
import userRouter from "./user.router.js";
import authRouter from "./auth.router.js";
import courseCategoryRouter from "./course-category.router.js";
import courseRouter from "./course.router.js";

const rootRouter = express.Router();

rootRouter.use("/users", userRouter);

rootRouter.use("/auth", authRouter);

rootRouter.use("/course-categories", courseCategoryRouter);

rootRouter.use("/courses", courseRouter);

export default rootRouter;
