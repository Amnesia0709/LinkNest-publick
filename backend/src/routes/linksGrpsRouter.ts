import express from "express";
import { getLinksToGrpc, sendLinkToGrpc } from "../controllers/linksController";

const router = express.Router();

router.post("/", sendLinkToGrpc);
router.get("/", getLinksToGrpc);

export { router as linksRouter };
