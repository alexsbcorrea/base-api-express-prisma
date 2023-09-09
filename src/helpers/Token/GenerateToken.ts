import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import { Payload, ITokenGenerate } from "./interfaces";

const secret = process.env.JWT_TOKEN_SECRET || "teste";

export default class TokenGenerate implements ITokenGenerate {
  async execute(data: Payload) {
    try {
      const token = jwt.sign(
        { id: data.id, name: data.name, email: data.email },
        secret
      );
      return token;
    } catch (error) {
      return undefined;
    }
  }
}
