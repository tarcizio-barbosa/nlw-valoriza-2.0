import { Prisma } from '@prisma/client';
import { prisma } from './clientService';

const userPersonalData = Prisma.validator<Prisma.UserArgs>()({
  select: { userName: true, userEmail: true, userPassword: true },
});

type UserPersonalData = Prisma.UserGetPayload<typeof userPersonalData>;

class CreateUserService {
  async execute({ userName, userEmail, userPassword }: UserPersonalData) {
    if (!userEmail) {
      throw new Error('Please insert a valid e-mail.');
    }

    const userAlreadyExists = await prisma.user.findUnique({
      where: {
        userEmail,
      },
    });

    if (userAlreadyExists) {
      throw new Error(
        'There is a unique constraint violation. A new User cannot be created with the same name.',
      );
    }

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
