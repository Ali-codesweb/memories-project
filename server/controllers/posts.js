import { PostMessage } from "../models/postMessage.js";

const CustomResponse = (res, statusCode, data) => {
  res.status(statusCode).json(data);
};

export async function getPosts(req, res) {
  try {
    const postMessages = await PostMessage.find();
    CustomResponse(res, 200, postMessages);
  } catch (error) {
    CustomResponse(res, 404, { message: error.message });
  }
}

export async function createPost(req, res) {
  const post = req.body;

  const newPost = PostMessage(post);
  try {
    await newPost.save();
    CustomResponse(res, 201, newPost);
  } catch (error) {
    CustomResponse(res, 401, { message: error.message });
  }
}
