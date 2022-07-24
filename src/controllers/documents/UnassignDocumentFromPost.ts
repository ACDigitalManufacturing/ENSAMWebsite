import { Request, Response } from "express";
import { FlattenMaps, LeanDocument } from "mongoose";
import { body } from "express-validator";
import { Types } from "mongoose";
import { NotFoundError } from "../../errors/not-found-error";
import { Post, Document, PostDoc, DocumentDoc } from "../../models";

export interface UnassignDocumentFromPostResponse {
  success: boolean;
  post: FlattenMaps<LeanDocument<PostDoc<Types.ObjectId>>>;
}

export const UnassignDocumentFromPost = async (req: Request, res: Response) => {
  const existingDocument = req.document;
  const existingPost = req.post as PostDoc<Types.ObjectId>;

  if (
    !existingPost.documents.find(
      (document) =>
        document.toHexString() === existingDocument._id.toHexString()
    )
  ) {
    throw new NotFoundError("document is not assigned to post");
  }

  // assigning the document to post
  existingPost.documents = existingPost.documents.filter(
    (document) => document.toHexString() !== existingDocument._id.toHexString()
  );
  await existingPost.save();
  await existingDocument.delete();

  // response
  const response: UnassignDocumentFromPostResponse = {
    success: true,
    post: existingPost.toJSON(),
  };
  return res.send(response);
};
