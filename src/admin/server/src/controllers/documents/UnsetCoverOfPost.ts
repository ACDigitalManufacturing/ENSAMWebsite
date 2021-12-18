import { Request, Response } from "express";
import { FlattenMaps, LeanDocument } from "mongoose";
import { body } from "express-validator";
import { Types } from "mongoose";
import { NotFoundError } from "../../errors/not-found-error";
import { Post, PostDoc, DocumentDoc } from "../../models";
import { BadRequestError } from "../../errors/bad-request-error";

export interface UnsetCoverOfPostResponse {
  success: boolean;
  post: FlattenMaps<LeanDocument<PostDoc>>;
}

export const UnsetCoverOfPost = async (req: Request, res: Response) => {
  const existingPost = req.post;

  if (!existingPost.cover) {
    throw new BadRequestError("cover already unset");
  }

  const existingDocument = (
    await (existingPost as PostDoc<DocumentDoc>).populate("cover")
  ).cover;

  // unset post's cover
  existingPost.cover = null;
  await existingPost.save();
  await existingDocument.delete();

  // response
  const response: UnsetCoverOfPostResponse = {
    success: true,
    post: existingPost.toJSON(),
  };
  return res.send(response);
};
