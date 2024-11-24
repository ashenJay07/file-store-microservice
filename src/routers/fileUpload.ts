import { Router } from "express";
import fileUploadUtil from "../utils/fileUploadUtil";
import { uploadFile } from "../controllers/fileUpload";

const router = Router();

// Define file upload route
router.post("/", fileUploadUtil.single("file"), uploadFile);

export default router;
