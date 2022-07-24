import express from "express";

import { GetDocumentById, GetPostById } from "../db/GetById";

import {
  ReadAllDocuments,
  ReadDocument,
  ReadDocumentMeta,
} from "../controllers/documents";

const router = express.Router();
router.param("documentId", GetDocumentById);
router.param("postId", GetPostById);

//? GETS
router.get("/all", ReadAllDocuments);
router.get("/:documentId", ReadDocument);
router.get("/meta/:documentId", ReadDocumentMeta);

export { router as documentsRouter };
