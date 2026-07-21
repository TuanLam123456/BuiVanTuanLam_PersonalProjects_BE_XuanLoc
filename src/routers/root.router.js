import express from "express";
import userRouter from "./user.router.js";

const rootRouter = express.Router();

rootRouter.use(
  "/users",
  userRouter
);

export default rootRouter;