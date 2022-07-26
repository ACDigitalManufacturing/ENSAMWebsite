import { Request, Response } from "express";

export const ReadDocument = async (req: Request, res: Response) => {
  const { filename, data, contentType } = req.document;

  res.set("Content-Type", contentType);
  res.setHeader("Content-disposition", `attachment; filename=${filename}`);
  return res.send(data);
};
