import express from "express";

import { placementTestController } from "../controllers/placement-test.controller.js";

import { authCookie } from "../common/middlewares/auth-cookie.middleware.js";
import { authAdmin } from "../common/middlewares/auth-admin.middleware.js";

const placementTestRouter = express.Router();

placementTestRouter.get(
  "/",
  authCookie,
  authAdmin,
  placementTestController.findAll,
);

placementTestRouter.get(
  "/:id",
  authCookie,
  authAdmin,
  placementTestController.findOne,
);

placementTestRouter.post(
  "/",
  authCookie,
  authAdmin,
  placementTestController.create,
);

placementTestRouter.patch(
  "/:id",
  authCookie,
  authAdmin,
  placementTestController.update,
);

placementTestRouter.delete(
  "/:id",
  authCookie,
  authAdmin,
  placementTestController.delete,
);

export default placementTestRouter;
