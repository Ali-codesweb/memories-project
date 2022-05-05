import express from "express";
import { createPost, getPosts } from "../controllers/posts.js";

const postRoutes = express.Router();

postRoutes.get("/", getPosts);
postRoutes.post("/", createPost);

export { postRoutes };
