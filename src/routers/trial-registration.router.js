import express from "express";
import { trialRegistrationController } from "../controllers/trial-registration.controller.js";
import { authCookie } from "../common/middlewares/auth-cookie.middleware.js";
import { authAdmin } from "../common/middlewares/auth-admin.middleware.js";


const trialRegistrationRouter =
express.Router();


// Public
trialRegistrationRouter.post(
    "/",
    trialRegistrationController.create
);


// Admin
trialRegistrationRouter.get(
    "/",
    authCookie,
    authAdmin,
    trialRegistrationController.findAll
);


trialRegistrationRouter.get(
    "/:id",
    authCookie,
    authAdmin,
    trialRegistrationController.findOne
);


trialRegistrationRouter.patch(
    "/:id",
    authCookie,
    authAdmin,
    trialRegistrationController.update
);


trialRegistrationRouter.delete(
    "/:id",
    authCookie,
    authAdmin,
    trialRegistrationController.delete
);


export default trialRegistrationRouter;