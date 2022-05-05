import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import { postRoutes } from "./routes/posts.js";

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use("/posts", postRoutes);

const CONNECT_URL = "mongodb://localhost:27017";
const PORT = process.env.PORT || 5000;
mongoose
  .connect(CONNECT_URL)
  .then((e) => {
    app.listen(PORT, () => console.log(`Server running on Port ${PORT}`));
  })
  .catch((e) => {
    console.log(e.message);
  });
