import express from "express";
import {
  ReadNoticeToStudentsPosts,
  ReadOfficialPressReleasesPosts,
  TheyTalkAboutUs,
} from "../controllers/home";

import { GetDocumentById, GetPostById } from "../db/GetById";

const router = express.Router();
router.param("documentId", GetDocumentById);
router.param("postId", GetPostById);

//? GETS
router.get("/notice-to-students", ReadNoticeToStudentsPosts);
router.get("/official-press-releases", ReadOfficialPressReleasesPosts);
router.get("/they-talk-about-us", TheyTalkAboutUs);

export { router as homeRouter };
