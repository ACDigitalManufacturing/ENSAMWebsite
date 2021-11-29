import { Request, Response } from "express";
import { body } from "express-validator";
import { NotFoundError } from "../../errors/not-found-error";
import { Post, Document, PostDoc } from "../../models";

export interface SetCoverOfPostResponse {
  success: boolean;
  post: PostDoc;
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
  const { documentId, postId } = req.body;

  // validate existence of document && post && document format
  const existingPost = await Post.findById(postId);
  if (!existingPost) {
    throw new NotFoundError("post not found");
  }
  const existingDocument = await Document.findById(documentId);
  if (!existingDocument) {
    throw new NotFoundError("document not found");
  }
  if (!(existingDocument.contentType in AllowedTypesForCover)) {
    throw new NotFoundError("document format is invalid for a post cover");
  }

  // assigning the document to post
  existingPost.cover = existingDocument._id;
  await existingPost.save();

  // response
  const response: SetCoverOfPostResponse = {
    success: true,
    post: undefined,
  };
  return res.send(response);
};

export const SetCoverOfPostValidator = [
  body("postId")
    .exists()
    .isLength({ min: 20, max: 28 })
    .withMessage("post id required"),
  body("documentId")
    .exists()
    .isLength({ min: 20, max: 28 })
    .withMessage("document id required"),
];
