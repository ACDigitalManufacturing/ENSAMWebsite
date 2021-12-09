import express from "express";

import { GetDocumentById, GetPostById } from "../db/GetById";

import {
  CreateDocument,
  //
  ReadDocument,
} from "../controllers/documents";
import { ReadPost } from "../controllers/posts";

const router = express.Router();

//? Params
router.param("documentId", GetDocumentById);
router.param("postId", GetPostById);

//? GETS
router.get("/documents/:documentId", ReadDocument);
router.get("/documents/get-meta/:documentId", ReadDocument);
router.get("/posts/:postId", ReadPost);

export { router as clientRoutes };
