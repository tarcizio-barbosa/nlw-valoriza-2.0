import { Prisma } from '@prisma/client';
import { sign } from 'jsonwebtoken';
import { prisma } from './ClientService';
import { PasswordService } from './PasswordService';

const userPersonalData = Prisma.validator<Prisma.UserArgs>()({
  select: {
    userEmail: true,
    userPassword: true,
  },
});

type UserPersonalData = Prisma.UserGetPayload<typeof userPersonalData>;

class AuthService {
  async execute({ userEmail, userPassword }: UserPersonalData) {
    const user = await prisma.user.findUnique({
      where: {
        userEmail,
      },
    });

    if (!user) {
      throw new Error('E-mail/Password incorrect.');
    }

    const passwordService = new PasswordService();
    const passwordMatch = passwordService.checkPassword(
      userPassword,
      user.userPassword,
    );

    if (!passwordMatch) {
      throw new Error('E-mail/Password incorrect.');
    }

    const token = sign(
      { email: user.userEmail },
      process.env.SECRET_KEY as string,
      {
        subject: user.id,
        expiresIn: '1d',
      },
    );

    return token;
  }
}

export { AuthService };
