import { Request, Response } from "express";
import { FlattenMaps, LeanDocument } from "mongoose";

import { PostDoc, documentType } from "../../models";

export interface ReadPostResponse {
  post: FlattenMaps<LeanDocument<PostDoc<documentType>>>;
}

export const ReadPost = async (req: Request, res: Response) => {
  const response: ReadPostResponse = {
    post: req.post.toJSON(),
  };
  res.send(response);
};
