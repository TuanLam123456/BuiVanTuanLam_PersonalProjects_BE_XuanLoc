import express from "express";
import userRouter from "./user.router.js";
import authRouter from "./auth.router.js";
import courseCategoryRouter from "./course-category.router.js";
import courseRouter from "./course.router.js";
import teacherRouter from "./teacher.router.js";
import teacherCourseRouter from "./teacher-course.router.js";

const rootRouter = express.Router();

rootRouter.use("/users", userRouter);

rootRouter.use("/auth", authRouter);

rootRouter.use("/course-categories", courseCategoryRouter);

rootRouter.use("/courses", courseRouter);

rootRouter.use("/teachers", teacherRouter);

rootRouter.use(
    "/teacher-courses",
    teacherCourseRouter
);

export default rootRouter;
