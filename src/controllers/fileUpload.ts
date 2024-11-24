import { NextFunction, Request, Response } from "express";

// Controller to handle file upload
export const uploadFile: (
  req: Request,
  res: Response,
  next: NextFunction
) => void = (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: "No file uploaded" });
  }

  return res.status(200).json({
    message: "File uploaded successfully",
    file: {
      originalName: req.file.originalname,
      storedName: req.file.filename,
      path: req.file.path,
      size: req.file.size,
    },
  });
};
