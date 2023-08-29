import { Request, Response } from "express";
import jwt from "jsonwebtoken";

const secret = process.env.SECRET || "teste";

export default class GenerateToken {
  static async execute(req: Request, res: Response) {
    const token = jwt.sign({ id: 1, firstname: "Alex", email: "alex.sandro_as@hotmail.com" }, secret);
    return token;
  }
}
