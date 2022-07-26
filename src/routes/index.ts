import express from "express";
import { documentsRouter } from "./Documents";
import { homeRouter } from "./Home";
import { postsRouter } from "./Posts";

const router = express.Router();

//! routes
router.use("/posts", postsRouter);
router.use("/documents", documentsRouter);
router.use("/home", homeRouter);

export { router as mainRouter };
