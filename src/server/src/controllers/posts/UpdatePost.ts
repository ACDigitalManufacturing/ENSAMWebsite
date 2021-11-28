import { Request, Response } from "express";
import { body } from "express-validator";
import { FlattenMaps, LeanDocument } from "mongoose";
import { BadRequestError } from "../../errors/bad-request-error";

import { PostDoc, coverType, documentsType, PostStatuses } from "../../models";

export interface UpdatePostResponse {
  success: boolean;
  post: FlattenMaps<LeanDocument<PostDoc<coverType, documentsType>>>;
}

export const UpdatePost = async (req: Request, res: Response) => {
  const { title, content, status } = req.body;
  const post = req.post;

  // verification of status
  let status_as_number = /^-?\d+$/.test(status as string)
    ? parseInt(status as string)
    : null;

  if (!Object.values(PostStatuses).includes(status_as_number))
    throw new BadRequestError("status do not exist", "status");

  // update
  post.title = title;
  post.content = content;
  post.status = status_as_number;

  await post.save();

  // response
  const response: UpdatePostResponse = {
    success: true,
    post: post.toJSON(),
  };
  res.send(response);
};

export const UpdatePostValidator = [
  body("title")
    .trim()
    .exists()
    .isLength({ min: 4, max: 30 })
    .withMessage("title not valid"),
  body("content")
    .trim()
    .exists()
    .isLength({ min: 4 })
    .withMessage("content not valid"),
  body("status").isNumeric().withMessage("status not valid"),
];
