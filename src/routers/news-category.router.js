import express from "express";
import { newsCategoryController } from "../controllers/news-category.controller.js";
import { authCookie } from "../common/middlewares/auth-cookie.middleware.js";
import { authAdmin } from "../common/middlewares/auth-admin.middleware.js";

const newsCategoryRouter = express.Router();

newsCategoryRouter.get("/", newsCategoryController.findAll);

newsCategoryRouter.get("/:slug", newsCategoryController.findOne);

newsCategoryRouter.post(
  "/",
  authCookie,
  authAdmin,
  newsCategoryController.create,
);

newsCategoryRouter.patch(
  "/:id",
  authCookie,
  authAdmin,
  newsCategoryController.update,
);

newsCategoryRouter.delete(
  "/:id",
  authCookie,
  authAdmin,
  newsCategoryController.delete,
);

export default newsCategoryRouter;
