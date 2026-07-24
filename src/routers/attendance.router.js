import express from "express";

import { attendanceController } from "../controllers/attendance.controller.js";

import { authCookie } from "../common/middlewares/auth-cookie.middleware.js";

import { authAdmin } from "../common/middlewares/auth-admin.middleware.js";

const attendanceRouter = express.Router();

attendanceRouter.get("/", authCookie, authAdmin, attendanceController.findAll);

attendanceRouter.get(
  "/:id",
  authCookie,
  authAdmin,
  attendanceController.findOne,
);

attendanceRouter.post("/", authCookie, authAdmin, attendanceController.create);

attendanceRouter.patch(
  "/:id",
  authCookie,
  authAdmin,
  attendanceController.update,
);

attendanceRouter.delete(
  "/:id",
  authCookie,
  authAdmin,
  attendanceController.delete,
);

export default attendanceRouter;
