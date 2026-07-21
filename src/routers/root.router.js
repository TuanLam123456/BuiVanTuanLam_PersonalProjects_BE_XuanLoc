import express from "express";
import userRouter from "./user.router.js";
import authRouter from "./auth.router.js";


const rootRouter = express.Router();


rootRouter.use(
  "/users",
  userRouter
);


rootRouter.use(
  "/auth",
  authRouter
);


export default rootRouter;