import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';

type Payload = {
  sub: string;
};

export function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction,
) {
  const authToken = request.headers.authorization;

  if (!authToken) {
    return response.status(401).end();
  }

  const [, token] = authToken.split(' ');

  try {
    const { sub } = verify(token, process.env.SECRET_KEY as string) as Payload;

    request.userId = sub;

    return next();
  } catch (err) {
    return response.status(401).end();
  }
}
