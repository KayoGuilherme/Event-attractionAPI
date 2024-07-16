import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import * as dotenv from "dotenv";

dotenv.config();

interface Payload {
  sub: string;
}

export function isAuthenticated(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const authToken = req.headers.authorization;

  if (!authToken) {
    return res.status(401).json("Token invalido");
  }

  const [, token] = authToken.split(" ");

  const jwtSecret = process.env.JWT_SECRET;

  if (!jwtSecret) {
    throw new Error("secret is not defined");
  }

  try {
    const { sub } = verify(token, jwtSecret) as Payload;
    req.user_id = sub;

    return next();
  } catch (err) {
    return res.status(401).end();
  }
}
