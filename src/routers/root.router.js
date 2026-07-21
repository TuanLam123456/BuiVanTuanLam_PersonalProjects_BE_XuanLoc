import express from "express";
import userRouter from "./user.router.js";
import authRouter from "./auth.router.js";
import courseCategoryRouter from "./course-category.router.js";

const rootRouter = express.Router();

rootRouter.use(
  "/users",
  userRouter
);

rootRouter.use(
  "/auth",
  authRouter
);

rootRouter.use(
    "/course-categories",
    courseCategoryRouter
);

export default rootRouter;