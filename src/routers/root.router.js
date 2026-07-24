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
import trialRegistrationRouter from "./trial-registration.router.js";
import registrationRouter from "./registration.router.js";
import classRouter from "./class.router.js";
import enrollmentRouter from "./enrollment.router.js";
import tuitionPlanRouter from "./tuition-plan.router.js";
import paymentRouter from "./payment.router.js";
const rootRouter = express.Router();

rootRouter.use("/users", userRouter);

rootRouter.use("/auth", authRouter);

rootRouter.use("/course-categories", courseCategoryRouter);

rootRouter.use("/courses", courseRouter);

rootRouter.use("/teachers", teacherRouter);

rootRouter.use("/teacher-courses", teacherCourseRouter);

rootRouter.use("/news", newsRouter);

rootRouter.use("/news-categories", newsCategoryRouter);

rootRouter.use("/opening-schedules", openingScheduleRouter);

rootRouter.use("/trial-registrations", trialRegistrationRouter);

rootRouter.use("/registrations", registrationRouter);

rootRouter.use("/classes", classRouter);

rootRouter.use("/enrollments", enrollmentRouter);

rootRouter.use("/tuition-plans", tuitionPlanRouter);

rootRouter.use("/payments", paymentRouter);

export default rootRouter;
