import express from "express";
import { validateRequest } from "../middlewares/validate-request";

import { GetPostById } from "../db/GetById";

import {
  //
  ReadAllPosts,
  ReadPost,
} from "../controllers/posts";

const router = express.Router();
router.param("postId", GetPostById);

//? GETS
router.get("/all", ReadAllPosts);
router.get("/:postId", ReadPost);

export { router as postsRouter };
