import express, { Request, Response, NextFunction } from "express";

function ExceptionHandler(error: Error, req: Request, res: Response, next: NextFunction) {
  if (error instanceof Error) {
    return res.status(422).json({
      message: error.message,
    });
  }
  return res.status(500).json({
    status: "error",
    message: `Internal server error - ${error}`,
  });
}

export default ExceptionHandler;
