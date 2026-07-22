import express from "express";
import { teacherCourseController } from "../controllers/teacher-course.controller.js";
import { authCookie } from "../common/middlewares/auth-cookie.middleware.js";
import { authAdmin } from "../common/middlewares/auth-admin.middleware.js";


const teacherCourseRouter = express.Router();



teacherCourseRouter.get(
    "/",
    authCookie,
    authAdmin,
    teacherCourseController.findAll
);



teacherCourseRouter.post(
    "/",
    authCookie,
    authAdmin,
    teacherCourseController.create
);



teacherCourseRouter.delete(
    "/:id",
    authCookie,
    authAdmin,
    teacherCourseController.delete
);



export default teacherCourseRouter;