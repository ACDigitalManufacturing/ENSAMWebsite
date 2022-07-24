import { Request, Response } from "express";

export const ReadDocumentMeta = async (req: Request, res: Response) => {
  return res.send({ document: req.document });
};
