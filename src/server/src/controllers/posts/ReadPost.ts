import { Request, Response } from "express";
import { FlattenMaps, LeanDocument } from "mongoose";

import { PostDoc, coverType, documentsType } from "../../models";

export interface ReadPostResponse {
  post: FlattenMaps<LeanDocument<PostDoc<coverType, documentsType>>>;
}

export const ReadPost = async (req: Request, res: Response) => {
  const response: ReadPostResponse = {
    post: req.post.toJSON(),
  };
  res.send(response);
};
