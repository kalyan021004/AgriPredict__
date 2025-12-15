import express from "express";
import { chatController } from "../controllers/chatController.js";
import { ragAdd, ragQuery } from "../controllers/ragController.js";
import { hybridController } from "../controllers/hybridController.js";

const router = express.Router();

router.get("/health", (_, res) => res.json({ status: "ok" }));

router.post("/chat", chatController);
router.post("/rag/add", ragAdd);
router.post("/rag/query", ragQuery);
router.post("/hybrid", hybridController);


export default router;
