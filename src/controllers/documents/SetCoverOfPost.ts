import { Request, Response } from "express";
import { FlattenMaps, LeanDocument } from "mongoose";
import { NotFoundError } from "../../errors/not-found-error";
import { PostDoc, documentType } from "../../models";

export interface SetCoverOfPostResponse {
  success: boolean;
  post: FlattenMaps<LeanDocument<PostDoc<documentType>>>;
}

export enum AllowedTypesForCover {
  png = "image/png",
  jpg = "image/jpg",
  gif = "image/gif",
  jpeg = "image/jpeg",
  svg = "image/svg+xml",
  webp = "image/webp",
}

export const SetCoverOfPost = async (req: Request, res: Response) => {
  const existingDocument = req.document;
  const existingPost = req.post;

  // validate  document format
  // if (!(existingDocument.contentType in AllowedTypesForCover)) {
  if (
    !Object.values(AllowedTypesForCover).includes(
      existingDocument.contentType.toLocaleLowerCase() as AllowedTypesForCover
    )
  ) {
    throw new NotFoundError("Document format is invalid for a post cover");
  }

  // assigning the document to post
  existingPost.cover = existingDocument._id;
  await existingPost.save();

  // response
  const response: SetCoverOfPostResponse = {
    success: true,
    post: existingPost.toJSON(),
  };
  return res.send(response);
};
