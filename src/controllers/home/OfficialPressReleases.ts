import { Request, Response } from "express";
import { FlattenMaps, LeanDocument } from "mongoose";

import {
  PostDoc,
  documentType,
  Post,
  PostCategories,
  PostStatuses,
} from "../../models";

export interface ReadOfficialPressReleasesPostsResponse {
  posts: FlattenMaps<LeanDocument<PostDoc<documentType>>>[];
}

export const ReadOfficialPressReleasesPosts = async (
  req: Request,
  res: Response
) => {
  const { skip, limit } = req.query;

  // set number of posts to skip
  let skip_as_number = /^-?\d+$/.test(skip as string)
    ? parseInt(skip as string)
    : 0;

  // set limit of posts to be loaded
  let limit_as_number = /^-?\d+$/.test(limit as string)
    ? parseInt(limit as string)
    : 9;

  // set options if category
  let options = {
    category: PostCategories.OfficialReleases,
    status: PostStatuses.live,
  };

  // query
  const posts = await Post.find(options)
    .sort([["createdAt", -1]])
    .skip(skip_as_number)
    .limit(limit_as_number)
    .exec();

  // response
  const response: ReadOfficialPressReleasesPostsResponse = {
    posts,
  };

  res.send(response);
};
