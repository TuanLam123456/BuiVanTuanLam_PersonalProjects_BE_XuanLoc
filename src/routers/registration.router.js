import express from "express";
import { registrationController } from "../controllers/registration.controller.js";
import { authCookie } from "../common/middlewares/auth-cookie.middleware.js";
import { authAdmin } from "../common/middlewares/auth-admin.middleware.js";

const registrationRouter = express.Router();

registrationRouter.post("/", registrationController.create);

registrationRouter.get(
  "/",
  authCookie,
  authAdmin,
  registrationController.findAll,
);

registrationRouter.get(
  "/:id",
  authCookie,
  authAdmin,
  registrationController.findOne,
);

registrationRouter.patch(
  "/:id",
  authCookie,
  authAdmin,
  registrationController.update,
);

registrationRouter.delete(
  "/:id",
  authCookie,
  authAdmin,
  registrationController.delete,
);

export default registrationRouter;
