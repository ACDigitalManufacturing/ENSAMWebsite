import express from "express";

import { validateRequest } from "../middlewares/validate-request";
import { GetDocumentById } from "../db/GetById";

import {
  CreateDocument,
  //
  ReadAllDocuments,
  ReadDocument,
  //
  AssignDocumentToPost,
  AssignDocumentToPostValidator,
  //
  SetCoverOfPost,
  SetCoverOfPostValidator,
  //
  UnassignDocumentFromPost,
  UnassignDocumentFromPostValidator,
  //
  UnsetCoverOfPost,
  UnsetCoverOfPostValidator,
} from "../controllers/documents";

const router = express.Router();
router.param("documentId", GetDocumentById);

//? POST
router.post("/", CreateDocument);

//? GETS
router.get("/all", ReadAllDocuments);
router.get("/:documentId", ReadDocument);

//? PUT
router.put(
  "/assign-document",
  AssignDocumentToPostValidator,
  validateRequest,
  AssignDocumentToPost,
);
router.put(
  "/set-cover",
  SetCoverOfPostValidator,
  validateRequest,
  SetCoverOfPost,
);

//? DELETE
router.delete(
  "/unassign-document",
  UnassignDocumentFromPostValidator,
  validateRequest,
  UnassignDocumentFromPost,
);

router.delete(
  "/unset-cover",
  UnsetCoverOfPostValidator,
  validateRequest,
  UnsetCoverOfPost,
);
export { router as documentsRouter };
