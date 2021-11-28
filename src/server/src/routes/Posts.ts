import express from "express";
import {
  CreatePost,
  CreatePostValidator,
} from "../controllers/posts/CreatePost";
import { ReadAllPosts } from "../controllers/posts/ReadAllPosts";
import { ReadPost } from "../controllers/posts/ReadPost";
import { UpdatePost } from "../controllers/posts/UpdatePost";

import { GetPostById } from "../db/GetById";

const router = express.Router();
router.param("postId", GetPostById);

//? POST
router.post("/", CreatePostValidator, CreatePost);

//? GETS
router.get("/all", ReadAllPosts);
router.get("/:postId", ReadPost);

//? PUT
router.put("/:postId", UpdatePost);

//? PUT
router.put("/:postId", UpdatePost);

export { router as postsRouter };
