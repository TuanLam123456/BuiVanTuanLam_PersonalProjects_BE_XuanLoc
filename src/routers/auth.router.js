import express from "express";
import { authController } from "../controllers/auth.controller.js";
import { authCookie } from './../common/middlewares/auth-cookie.middleware.js';


const authRouter = express.Router();


authRouter.post(
  "/register",
  authController.register
);


authRouter.post(
  "/login",
  authController.login
);


authRouter.post(
  "/refresh-token",
  authController.refreshToken
);


authRouter.post(
  "/logout",
  authController.logout
);

authRouter.get(
  "/profile",
  authCookie,
  authController.profile
);


authRouter.patch(
  "/reset-password",
  authCookie,
  authController.resetPassword
);

authRouter.post(
  "/forgot-password",
  authController.forgotPassword
);

authRouter.post(
    "/verify-reset-otp",
    authController.verifyResetOTP
);

authRouter.post(
  "/reset-password-token",
  authController.resetPasswordToken
);

export default authRouter;