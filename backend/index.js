import dotenv from "dotenv";
dotenv.config({ path: "../.env" });

import express from "express";
import connect from "./codes/db/connection.js";
import postRouter from "./codes/routes/post.route.js";
import getRouter from "./codes/routes/get.route.js";
import cors from "cors";

const app = express();
const port = process.env.PORT || 5000;
const corsOptions = {
  origin: "http://localhost:5173",
  methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
  credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());
app.use("/api/post", postRouter);
app.use("/api/get", getRouter);

connect().then(() => {
  app.listen(port, () => {
    console.log(`server is running at ${port}`);
  });
});
