import express from "express";

import { GetDocumentById, GetPostById } from "../db/GetById";

import {
  CreateDocument,
  //
  ReadAllDocuments,
  ReadDocument,
  //
  AssignDocumentToPost,
  //
  SetCoverOfPost,
  //
  UnassignDocumentFromPost,
  //
  UnsetCoverOfPost,
} from "../controllers/documents";

const router = express.Router();
router.param("documentId", GetDocumentById);
router.param("postId", GetPostById);

//? POST
router.post("/", CreateDocument);

//? GETS
router.get("/all", ReadAllDocuments);
router.get("/:documentId", ReadDocument);

//? PUT
router.put("/assign-document/:documentId/:postId", AssignDocumentToPost);
router.put("/set-cover/:documentId/:postId", SetCoverOfPost);

//? DELETE
router.delete(
  "/unassign-document/:documentId/:postId",
  UnassignDocumentFromPost
);
router.delete("/unset-cover/:postId", UnsetCoverOfPost);

export { router as documentsRouter };
