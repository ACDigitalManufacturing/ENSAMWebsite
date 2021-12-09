import express from "express";
import { clientRoutes } from "./Client";
import { documentsRouter } from "./Documents";
import { postsRouter } from "./Posts";

const router = express.Router();

//! admin routes
//TODO: Protect routes
router.use("/posts", postsRouter);
router.use("/documents", documentsRouter);

//! client routes
router.use("/client", clientRoutes);

export { router as mainRouter };
