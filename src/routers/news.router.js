import express from "express";
import { newsController } from "../controllers/news.controller.js";
import { uploadDiskStorage } from "../common/multer/disk-storage.multer.js";
import { authAdmin } from "../common/middlewares/auth-admin.middleware.js";
import { authCookie } from "../common/middlewares/auth-cookie.middleware.js";

const newsRouter = express.Router();

newsRouter.get("/", newsController.findAll);

newsRouter.get("/:slug", newsController.findOne);

newsRouter.post(
    "/",
    authCookie,
    authAdmin,
    uploadDiskStorage.single("image"),
    newsController.create
);

newsRouter.patch(
    "/:id",
    authCookie,
    authAdmin,
    uploadDiskStorage.single("image"),
    newsController.update
);

newsRouter.delete(
    "/:id",
    authCookie,
    authAdmin,
    newsController.delete
);

export default newsRouter;
