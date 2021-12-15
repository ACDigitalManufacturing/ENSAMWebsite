import { Request, Response, NextFunction } from "express";
import { NotAuthorizedError } from "../errors/not-authorized-error";

export const PreSignedUrlAuditor = (
  req: Request,
  _: Response,
  next: NextFunction,
) => {
  if (!req.query.token) throw new NotAuthorizedError();

  next();
};
