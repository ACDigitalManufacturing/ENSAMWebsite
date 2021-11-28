import { Request, Response, NextFunction } from "express";
import { NotFoundError } from "../errors/not-found-error";
import Post from "../models/Post";

export const GetPostById = async (
  req: Request,
  _: Response,
  next: NextFunction,
  id: string,
) => {
  try {
    const post = await Post.findById(id);
    if (post) req.post = post;

    next();
  } catch (error) {
    throw new NotFoundError();
  }
};
