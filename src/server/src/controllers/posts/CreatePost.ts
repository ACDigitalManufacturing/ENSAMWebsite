import { Request, Response } from "express";
import { body } from "express-validator";

import { BadRequestError } from "../../errors/bad-request-error";

import { PostCategories, PostStatuses } from "../../models";
import Post from "../../models/Post";

export interface CreatePostResponse {
  success: boolean;
  postId: string;
}

const CreatePost = async (req: Request, res: Response) => {
  const { category } = req.body;

  // validation of category
  let category_as_number = /^-?\d+$/.test(category as string)
    ? parseInt(category as string)
    : null;

  if (!Object.values(PostCategories).includes(category_as_number))
    throw new BadRequestError("category do not exist", "category");

  // creating a new Post
  const newPost = Post.build({
    category: category_as_number,
    status: PostStatuses.not_saved,
  });

  await newPost.save();

  // response
  const response: CreatePostResponse = {
    success: true,
    postId: newPost._id.toHexString(),
  };
  res.send(response);
};

const CreatePostValidator = [
  body("category").isNumeric().withMessage("A valid category is required"),
];

export { CreatePost, CreatePostValidator };
