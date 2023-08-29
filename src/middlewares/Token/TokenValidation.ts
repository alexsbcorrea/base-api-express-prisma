import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

import { JWTDecode } from "./Interfaces";

const secret = process.env.SECRET || "teste";

export default class TokenValidation {
  static async execute(req: Request, res: Response, next: NextFunction) {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
      return res.status(401).json({ message: "NO_TOKEN" });
    }

    const token = authHeader.split(" ")[1];

    try {
      const decoded = jwt.verify(token, secret) as unknown;
      const { id } = decoded as JWTDecode;
      req.userID = id;
      next();
    } catch (error) {
      return res.status(401).json({ message: "INVALID_TOKEN" });
    }
  }
}
