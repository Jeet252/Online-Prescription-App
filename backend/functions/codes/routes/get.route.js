import express from "express";
import controller from "../controllers/controlles.js";
const getRouter = express.Router();

getRouter.route("/doctor").get(controller.doctorlist);
export default getRouter;
