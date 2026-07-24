import express from "express";

import { gradeController } from "../controllers/grade.controller.js";

import { authCookie } from "../common/middlewares/auth-cookie.middleware.js";

import { authAdmin } from "../common/middlewares/auth-admin.middleware.js";

const gradeRouter = express.Router();

gradeRouter.get("/", authCookie, authAdmin, gradeController.findAll);

gradeRouter.get("/:id", authCookie, authAdmin, gradeController.findOne);

gradeRouter.post("/", authCookie, authAdmin, gradeController.create);

gradeRouter.patch("/:id", authCookie, authAdmin, gradeController.update);

gradeRouter.delete("/:id", authCookie, authAdmin, gradeController.delete);

export default gradeRouter;
