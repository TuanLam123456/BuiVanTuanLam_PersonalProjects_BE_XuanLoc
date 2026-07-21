import express from "express";
import { courseCategoryController } from "../controllers/course-category.controller.js";

const courseCategoryRouter  = express.Router();

courseCategoryRouter.get(
    "/",
    courseCategoryController.findAll
);

export default courseCategoryRouter;