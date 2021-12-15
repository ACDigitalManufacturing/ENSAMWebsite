import { Request } from "express";
import formidable from "formidable";
import IncomingForm from "formidable/Formidable";

interface parseRequestFormType {
  err: any;
  fields: formidable.Fields;
  files: formidable.Files;
}

export const parseRequestForm = (
  req: Request,
  form: IncomingForm,
): Promise<parseRequestFormType> =>
  new Promise((resolve) => {
    form.parse(req, async (err, fields, files) => {
      return resolve({ err, fields, files });
    });
  });
