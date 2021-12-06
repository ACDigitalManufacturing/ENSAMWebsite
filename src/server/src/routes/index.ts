import express from "express";
import { documentsRouter } from "./Documents";
import { postsRouter } from "./Posts";

const router = express.Router();
router.use("/posts", postsRouter);
router.use("/documents", documentsRouter);

export { router as mainRouter };
