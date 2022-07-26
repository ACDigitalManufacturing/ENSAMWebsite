import { Request, Response } from "express";
import { body } from "express-validator";
import { FlattenMaps, LeanDocument } from "mongoose";

import { BadRequestError } from "../../errors/bad-request-error";

import {
  documentType,
  Post,
  PostCategories,
  PostDoc,
  PostStatuses,
} from "../../models";

export interface CreatePostResponse {
  success: boolean;
  post: FlattenMaps<LeanDocument<PostDoc<documentType>>>;
}

export const CreatePost = async (req: Request, res: Response) => {
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
    post: newPost.toJSON(),
  };
  res.send(response);
};

export const CreatePostValidator = [
  body("category").isNumeric().withMessage("A valid category is required"),
];
