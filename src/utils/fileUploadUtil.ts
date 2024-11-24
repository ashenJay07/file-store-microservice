import multer from "multer";
import path from "path";
import storage from "../config/multerConfig";

const upload = multer({
  storage,
  limits: { fileSize: 20 * 1024 * 1024 }, // limit file size to 20MB
  fileFilter: (req, file, cb) => {
    const allowedTypes = /jpeg|jpg|png|pdf/;
    const extname = allowedTypes.test(
      path.extname(file.originalname).toLowerCase()
    );
    const mimetype = allowedTypes.test(file.mimetype);

    if (extname && mimetype) {
      cb(null, true);
    } else {
      cb(new Error("Only images and PDFs are allowed!"));
    }
  },
});
