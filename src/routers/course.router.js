import express from "express";
import { courseController } from "../controllers/course.controller.js";

const courseRouter = express.Router();

courseRouter.get("/", courseController.findAll);

export default courseRouter;
