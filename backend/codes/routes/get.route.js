import express from "express";
import controller from "../controllers/controlles.js";
const getRouter = express.Router();

getRouter.route("/doctor").get(controller.doctorlist);
getRouter.route("/patient").get(controller.patientlist);
export default getRouter;
