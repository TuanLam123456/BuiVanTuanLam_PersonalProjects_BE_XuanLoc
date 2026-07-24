import express from "express";
import { paymentController } from "../controllers/payment.controller.js";
import { authCookie } from "../common/middlewares/auth-cookie.middleware.js";
import { authAdmin } from "../common/middlewares/auth-admin.middleware.js";

const paymentRouter = express.Router();

paymentRouter.get("/", authCookie, authAdmin, paymentController.findAll);

paymentRouter.get("/:id", authCookie, authAdmin, paymentController.findOne);

paymentRouter.post("/", authCookie, authAdmin, paymentController.create);

paymentRouter.patch("/:id", authCookie, authAdmin, paymentController.update);

paymentRouter.delete("/:id", authCookie, authAdmin, paymentController.delete);

export default paymentRouter;
