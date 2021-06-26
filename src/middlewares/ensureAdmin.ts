import { NextFunction, Request, Response } from 'express';
import { prisma } from '../services/ClientService';

export async function ensureAdmin(
  request: Request,
  response: Response,
  next: NextFunction,
) {
  const { userId } = request;

  const user = await prisma.user.findUnique({
    where: {
      id: userId,
    },
  });

  if (user?.userPermission === 'ADMIN') {
    return next();
  }

  return response.status(401).json({
    error: 'Unauthorized',
  });
}
