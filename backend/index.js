import dotenv from "dotenv";
dotenv.config();

import express from "express";
import postRouter from "./codes/routes/post.route.js";
import getRouter from "./codes/routes/get.route.js";
import cors from "cors";
import connectdb from "./codes/db/connection.js";

const app = express();
const port = process.env.PORT || 5000;
const corsOptions = {
  origin: "http://localhost:5173",
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

connectdb().then(() => {
  app.listen(port, () => {
    console.log(`server is running at ${port}`);
  });
});
