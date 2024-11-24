import { Request, Response, NextFunction } from "express";
import { MulterError } from "multer";

// Global error handler
const errorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  if (err instanceof MulterError) {
    res.status(400).json({ message: err.message });
  } else if (err) {
    res.status(500).json({ message: err.message });
  } else {
    next();
  }
};

export default errorHandler;
