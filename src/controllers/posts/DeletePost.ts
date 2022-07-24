import { Request, Response } from "express";
import { FlattenMaps, LeanDocument } from "mongoose";

import { documentType, PostDoc } from "../../models";

export interface DeletePostResponse {
  success: boolean;
  deletedPost: FlattenMaps<LeanDocument<PostDoc<documentType>>>;
}

export const DeletePost = async (req: Request, res: Response) => {
  await req.post.delete();

  const response: DeletePostResponse = {
    success: true,
    deletedPost: req.post.toJSON(),
  };

  res.send(response);
};
