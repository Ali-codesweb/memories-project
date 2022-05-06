import express from "express";
import { createPost, getPosts ,updatePost} from "../controllers/posts.js";

const postRoutes = express.Router();

postRoutes.get("/", getPosts);
postRoutes.post("/", createPost);
postRoutes.patch("/:id", updatePost);

export { postRoutes };
