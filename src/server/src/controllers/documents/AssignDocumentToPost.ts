import { Request, Response } from "express";
import { FlattenMaps, LeanDocument } from "mongoose";
import { body } from "express-validator";
import { Types } from "mongoose";

import { NotFoundError } from "../../errors/not-found-error";
import { PostDoc } from "../../models";

export interface AssignDocumentToPostResponse {
  success: boolean;
  post: FlattenMaps<LeanDocument<PostDoc<Types.ObjectId>>>;
}

export const AssignDocumentToPost = async (req: Request, res: Response) => {
  const existingDocument = req.document;
  const existingPost = req.post as PostDoc<Types.ObjectId>;

  if (!existingPost) {
    throw new NotFoundError("post not found");
  }
  if (!existingDocument) {
    throw new NotFoundError("document not found");
  }
  if (
    existingPost.documents.find(
      (document) =>
        document.toHexString() === existingDocument._id.toHexString()
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
    post: existingPost.toJSON(),
  };
  return res.send(response);
};
