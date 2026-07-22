import express from "express";
import { openingScheduleController } from "../controllers/opening-schedule.controller.js";
import { authCookie } from "../common/middlewares/auth-cookie.middleware.js";
import { authAdmin } from "../common/middlewares/auth-admin.middleware.js";

const openingScheduleRouter = express.Router();

openingScheduleRouter.get("/", openingScheduleController.findAll);

openingScheduleRouter.get("/:id", openingScheduleController.findOne);

openingScheduleRouter.post(
  "/",
  authCookie,
  authAdmin,
  openingScheduleController.create,
);

openingScheduleRouter.patch(
  "/:id",
  authCookie,
  authAdmin,
  openingScheduleController.update,
);

openingScheduleRouter.delete(
  "/:id",
  authCookie,
  authAdmin,
  openingScheduleController.delete,
);

export default openingScheduleRouter;
