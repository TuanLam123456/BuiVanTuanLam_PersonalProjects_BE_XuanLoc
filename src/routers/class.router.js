import express from "express";
import { classController } from "../controllers/class.controller.js";
import { authCookie } from "../common/middlewares/auth-cookie.middleware.js";
import { authAdmin } from "../common/middlewares/auth-admin.middleware.js";

const classRouter = express.Router();

classRouter.get("/", authCookie, authAdmin, classController.findAll);

classRouter.get("/:id", authCookie, authAdmin, classController.findOne);

classRouter.post("/", authCookie, authAdmin, classController.create);

classRouter.patch("/:id", authCookie, authAdmin, classController.update);

classRouter.delete("/:id", authCookie, authAdmin, classController.delete);

export default classRouter;
