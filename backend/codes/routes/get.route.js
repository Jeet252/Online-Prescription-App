import express from "express";
import controller from "../controllers/controlles.js";
const getRouter = express.Router();

getRouter.route("/patient").get(controller.signinPatient);
getRouter.route("/doctor").get(controller.signinDoctor);

export default getRouter;
