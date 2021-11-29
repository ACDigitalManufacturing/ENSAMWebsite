import { Request, Response, NextFunction } from "express";
import { NotFoundError } from "../errors/not-found-error";
import { Post, Document } from "../models";

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

export const GetDocumentById = async (
  req: Request,
  _: Response,
  next: NextFunction,
  id: string,
) => {
  try {
    const document = await Document.findById(id);
    if (document) req.document = document;

    next();
  } catch (error) {
    throw new NotFoundError();
  }
};
