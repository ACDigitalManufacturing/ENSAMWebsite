import express from "express";
import {
  CreatePost,
  CreatePostValidator,
} from "../controllers/posts/CreatePost";

import { GetPostById } from "../db/GetById";

const router = express.Router();
router.param("postId", GetPostById);

//? POST
router.post("/", CreatePostValidator, CreatePost);

//? GETS
router.get("/:postId");

//? PUT
router.put("/:postId");

export { router as postsRouter };
