import { Request, Response } from "express";
import { FlattenMaps, LeanDocument } from "mongoose";

import { PostDoc, documentType, Post, PostCategories } from "../../models";

export interface ReadAllPostsResponse {
  posts: FlattenMaps<LeanDocument<PostDoc<documentType>>>[];
}

export const ReadAllPosts = async (req: Request, res: Response) => {
  const { skip, category, limit } = req.query;

  // set number of posts to skip
  let skip_as_number = /^-?\d+$/.test(skip as string)
    ? parseInt(skip as string)
    : 0;

  // set category of post to query
  let category_as_number = /^-?\d+$/.test(category as string)
    ? parseInt(category as string)
    : null;

  // set limit of posts to be loaded
  let limit_as_number = /^-?\d+$/.test(limit as string)
    ? parseInt(limit as string)
    : 9;

  // set options if category
  let options =
    category && Object.values(PostCategories).includes(category_as_number)
      ? { category: category_as_number }
      : {};

  // query
  const posts = await Post.find(options)
    .sort([["createdAt", -1]])
    .skip(skip_as_number)
    .limit(limit_as_number)
    .exec();

  // response
  const response: ReadAllPostsResponse = {
    posts,
  };
  res.send(response);
};
