import { NextFunction, Request, Response } from "express";
import { FlattenMaps, LeanDocument } from "mongoose";
import formidable from "formidable";
import fs from "fs";
import "lodash";

import { BadRequestError } from "../../errors/bad-request-error";
import { Document, DocumentDoc } from "../../models";
import { parseRequestForm } from "../../utils/parsers";

export interface CreateDocumentResponse {
  success: boolean;
  document: FlattenMaps<LeanDocument<DocumentDoc>>;
}

export const CreateDocument = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  let form = new formidable.IncomingForm({
    multiples: true,
    maxFileSize: 10 * 1024 * 1024,
  });

  const {
    err,
    files: { document },
  } = await parseRequestForm(req, form);

  // validation
  if (err) {
    throw new BadRequestError("can't upload your file");
  }
  if (!document || document instanceof Array) {
    throw new BadRequestError("please upload a valid document");
  }

  // creating a new Document
  const newDocument = Document.build({
    filename: document.name,
    data: fs.readFileSync(document.path),
    contentType: document.type,
  });

  await newDocument.save();

  // response
  const response: CreateDocumentResponse = {
    success: true,
    document: newDocument.toJSON(),
  };

  res.send(response);
};
