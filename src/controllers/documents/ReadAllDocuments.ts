import { Request, Response } from "express";
import { FlattenMaps, LeanDocument } from "mongoose";

import { Document, DocumentDoc } from "../../models";

export interface ReadAllDocumentsResponse {
  documents: FlattenMaps<LeanDocument<DocumentDoc>>;
}

export const ReadAllDocuments = async (req: Request, res: Response) => {
  const { skip } = req.query;
  const limit = 50;

  // set number of documents to skip
  let skip_as_number = /^-?\d+$/.test(skip as string)
    ? parseInt(skip as string)
    : 0;

  // query
  const documents = await Document.find({})
    .sort([["createdAt", -1]])
    .skip(skip_as_number)
    .limit(limit)
    .exec();

  // response
  const response = {
    documents,
  };
  return res.send(response);
};
