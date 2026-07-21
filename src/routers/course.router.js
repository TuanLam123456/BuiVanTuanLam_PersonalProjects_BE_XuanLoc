import express from "express";
import { courseController } from "../controllers/course.controller.js";
import { authCookie } from "./../common/middlewares/auth-cookie.middleware.js";
import { authAdmin } from "./../common/middlewares/auth-admin.middleware.js";
import { uploadDiskStorage } from "./../common/multer/disk-storage.multer.js";

const courseRouter = express.Router();

courseRouter.get("/", courseController.findAll);

courseRouter.get("/:id", courseController.findOne);

courseRouter.post(
  "/",
  authCookie,
  authAdmin,
  uploadDiskStorage.single("image"),
  courseController.create,
);

courseRouter.patch(
  "/:id",
  authCookie,
  authAdmin,
  uploadDiskStorage.single("image"),
  courseController.update,
);

courseRouter.delete(
    "/:id",
    authCookie,
    authAdmin,
    courseController.delete
);

export default courseRouter;
