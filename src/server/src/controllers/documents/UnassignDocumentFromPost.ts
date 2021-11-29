import { Request, Response } from "express";
import { FlattenMaps, LeanDocument } from "mongoose";
import { body } from "express-validator";
import { Types } from "mongoose";
import { NotFoundError } from "../../errors/not-found-error";
import { Post, Document, PostDoc } from "../../models";

export interface UnassignDocumentFromPostResponse {
  success: boolean;
  post: FlattenMaps<LeanDocument<PostDoc<Types.ObjectId>>>;
}

export const UnassignDocumentFromPost = async (req: Request, res: Response) => {
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
    !existingPost.documents.find(
      (document) =>
        document.toHexString() === existingDocument._id.toHexString(),
    )
  ) {
    throw new NotFoundError("document is not assigned to post");
  }

  // assigning the document to post
  existingPost.documents = existingPost.documents.filter(
    (document) => document.toHexString() !== existingDocument._id.toHexString(),
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

export const UnassignDocumentFromPostValidator = [
  body("postId")
    .exists()
    .isLength({ min: 20, max: 28 })
    .withMessage("post id required"),
  body("documentId")
    .exists()
    .isLength({ min: 20, max: 28 })
    .withMessage("document id required"),
];
