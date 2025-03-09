import dotenv from "dotenv";
dotenv.config({ path: "../.env" });

import express from "express";
import connect from "./codes/db/connection.js";
const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());

connect().then(() => {
  app.listen(port, () => {
    console.log(`server is running at ${port}`);
  });
});
