import { Prisma } from '@prisma/client';
import { prisma } from './clientService';

const userPersonalData = Prisma.validator<Prisma.UserArgs>()({
  select: { userName: true, userEmail: true, userPassword: true },
});

type UserPersonalData = Prisma.UserGetPayload<typeof userPersonalData>;

class CreateUserService {
  async execute({ userName, userEmail, userPassword }: UserPersonalData) {
    const user = await prisma.user.create({
      data: {
        userName,
        userEmail,
        userPassword,
      },
    });

    return user;
  }
}

export { CreateUserService };
