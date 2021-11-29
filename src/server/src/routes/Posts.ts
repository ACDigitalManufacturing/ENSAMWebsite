import express from "express";
import { validateRequest } from "../middlewares/validate-request";

import { GetPostById } from "../db/GetById";

import {
  CreatePost,
  CreatePostValidator,
  //
  ReadAllPosts,
  ReadPost,
  //
  UpdatePost,
  UpdatePostValidator,
  //
  DeletePost,
} from "../controllers/posts";

const router = express.Router();
router.param("postId", GetPostById);

//? POST
router.post("/", CreatePostValidator, validateRequest, CreatePost);

//? GETS
router.get("/all", ReadAllPosts);
router.get("/:postId", ReadPost);

//? PUT
router.put("/:postId", UpdatePostValidator, validateRequest, UpdatePost);

//? DELETE
router.delete("/:postId", DeletePost);

export { router as postsRouter };
