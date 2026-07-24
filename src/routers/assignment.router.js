import express from "express";

import { assignmentController } from "../controllers/assignment.controller.js";

import { authCookie } from "../common/middlewares/auth-cookie.middleware.js";

import { authAdmin } from "../common/middlewares/auth-admin.middleware.js";

import { uploadDiskStorage } from "../common/multer/disk-storage.multer.js";

const assignmentRouter = express.Router();

assignmentRouter.get("/", authCookie, authAdmin, assignmentController.findAll);

assignmentRouter.get(
  "/:id",
  authCookie,
  authAdmin,
  assignmentController.findOne,
);

assignmentRouter.post(
  "/",
  authCookie,
  authAdmin,
  uploadDiskStorage.single("attachment"),
  assignmentController.create,
);

assignmentRouter.patch(
  "/:id",
  authCookie,
  authAdmin,
  uploadDiskStorage.single("attachment"),
  assignmentController.update,
);

assignmentRouter.delete(
  "/:id",
  authCookie,
  authAdmin,
  assignmentController.delete,
);

export default assignmentRouter;
