import { Request, Response } from "express";
import { FlattenMaps, LeanDocument } from "mongoose";
import { body } from "express-validator";
import { Types } from "mongoose";

import { NotFoundError } from "../../errors/not-found-error";
import { Post, Document, PostDoc } from "../../models";

export interface AssignDocumentToPostResponse {
  success: boolean;
  post: FlattenMaps<LeanDocument<PostDoc<Types.ObjectId>>>;
}

export const AssignDocumentToPost = async (req: Request, res: Response) => {
  const { documentId, postId } = req.body;

  // validate existence of document && post
  const existingPost = (await Post.findById(postId)) as PostDoc<Types.ObjectId>;

  if (!existingPost) {
    throw new NotFoundError("post not found");
  }
  const existingDocument = await Document.findById(documentId);
  if (!existingDocument) {
    throw new NotFoundError("document not found");
  }
  if (
    existingPost.documents.find(
      (document) =>
        document.toHexString() === existingDocument._id.toHexString(),
    )
  ) {
    throw new NotFoundError("document already assigned to post");
  }

  // assigning the document to post
  existingPost.documents.push(existingDocument._id);
  await existingPost.save();

  // response
  const response: AssignDocumentToPostResponse = {
    success: true,
    post: existingPost,
  };
  return res.send(response);
};

export const AssignDocumentToPostValidator = [
  body("postId")
    .exists()
    .isLength({ min: 20, max: 28 })
    .withMessage("post id required"),
  body("documentId")
    .exists()
    .isLength({ min: 20, max: 28 })
    .withMessage("document id required"),
];
