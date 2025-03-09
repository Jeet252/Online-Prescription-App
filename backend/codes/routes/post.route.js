import express from "express";
import controller from "../controllers/controlles.js";
const postRouter = express.Router();

postRouter.route("/patient").post(controller.signupPatient);
postRouter.route("/doctor").post(controller.signupDoctor);

export default postRouter;
