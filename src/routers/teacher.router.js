import express from "express";
import { teacherController } from "../controllers/teacher.controller.js";
import { authCookie } from "../common/middlewares/auth-cookie.middleware.js";
import { authAdmin } from "../common/middlewares/auth-admin.middleware.js";
import { uploadDiskStorage } from "../common/multer/disk-storage.multer.js";

const teacherRouter = express.Router();

teacherRouter.get("/", teacherController.findAll);

teacherRouter.post(
    "/",
    authCookie,
    authAdmin,
    uploadDiskStorage.single("avatar"),
    teacherController.create
);

teacherRouter.patch(
    "/:id",
    authCookie,
    authAdmin,
    uploadDiskStorage.single("avatar"),
    teacherController.update
);

teacherRouter.delete(
    "/:id",
    authCookie,
    authAdmin,
    teacherController.delete
);

export default teacherRouter;
