import express from "express";
import { enrollmentController } from "../controllers/enrollment.controller.js";
import { authCookie } from "../common/middlewares/auth-cookie.middleware.js";
import { authAdmin } from "../common/middlewares/auth-admin.middleware.js";

const enrollmentRouter = express.Router();

enrollmentRouter.get("/", authCookie, authAdmin, enrollmentController.findAll);

enrollmentRouter.get(
  "/:id",
  authCookie,
  authAdmin,
  enrollmentController.findOne,
);

enrollmentRouter.post("/", authCookie, authAdmin, enrollmentController.create);

enrollmentRouter.patch(
  "/:id",
  authCookie,
  authAdmin,
  enrollmentController.update,
);

enrollmentRouter.delete(
  "/:id",
  authCookie,
  authAdmin,
  enrollmentController.delete,
);

export default enrollmentRouter;
