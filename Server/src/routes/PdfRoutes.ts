import { Router } from "express";
import { PdfController } from "../controllers/PdfController";
import { AuthMiddleware } from "../utils/utils";

const router = Router();
const pdfController = new PdfController();

router.get("/download", AuthMiddleware,  pdfController.downloadPdf);

export default router;
