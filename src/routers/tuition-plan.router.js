import express from "express";
import { tuitionPlanController } from "../controllers/tuition-plan.controller.js";
import { authCookie } from "../common/middlewares/auth-cookie.middleware.js";
import { authAdmin } from "../common/middlewares/auth-admin.middleware.js";

const tuitionPlanRouter = express.Router();

tuitionPlanRouter.get("/", tuitionPlanController.findAll);

tuitionPlanRouter.get("/:id", tuitionPlanController.findOne);

tuitionPlanRouter.post(
  "/",
  authCookie,
  authAdmin,
  tuitionPlanController.create,
);

tuitionPlanRouter.patch(
  "/:id",
  authCookie,
  authAdmin,
  tuitionPlanController.update,
);

tuitionPlanRouter.delete(
  "/:id",
  authCookie,
  authAdmin,
  tuitionPlanController.delete,
);

export default tuitionPlanRouter;
