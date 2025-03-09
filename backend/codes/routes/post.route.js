import express from "express";
import controller from "../controllers/controlles.js";
const postRouter = express.Router();

postRouter.route("/patient").post(controller.signupPatient);
postRouter.route("/doctor").post(controller.signupDoctor);
postRouter.route("/consultation").post(controller.consultation);
postRouter.route("/prescription").post(controller.prescription);
postRouter.route("/patient/signin").post(controller.signinPatient);
postRouter.route("/doctor/signin").post(controller.signinDoctor);
export default postRouter;
