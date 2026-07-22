import express from "express";
import userRouter from "./user.router.js";
import authRouter from "./auth.router.js";
import courseCategoryRouter from "./course-category.router.js";
import courseRouter from "./course.router.js";
import teacherRouter from "./teacher.router.js";
import teacherCourseRouter from "./teacher-course.router.js";
import newsRouter from "./news.router.js";
import newsCategoryRouter from "./news-category.router.js";
import openingScheduleRouter from "./opening-schedule.router.js";

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

rootRouter.use(
    "/news",
    newsRouter
);

rootRouter.use(
    "/news-categories",
    newsCategoryRouter
);

rootRouter.use(
    "/opening-schedules",
    openingScheduleRouter
);

export default rootRouter;
