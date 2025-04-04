import dotenv from "dotenv";
dotenv.config();

import express from "express";
import postRouter from "./codes/routes/post.route.js";
import getRouter from "./codes/routes/get.route.js";
import cors from "cors";
import connectdb from "./codes/db/connection.js";
import serverless from "serverless-http";

const app = express();
const port = process.env.PORT || 5000;
const corsOptions = {
  origin: [
    "http://localhost:5173",
    "https://online-prescription-platform.onrender.com",
  ],
  methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
  credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/", (req, res) => {
  res.status(200).send({ msg: "hello from backend" });
});
app.use("/api/post", postRouter);
app.use("/api/get", getRouter);

connectdb();

const handler = serverless(app);
module.exports.handler = async (event, context) => {
  const result = await handler(event, context);
  return result;
};
