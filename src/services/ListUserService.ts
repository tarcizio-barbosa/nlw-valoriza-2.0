import { prisma } from './ClientService';

class ListUserService {
  async execute() {
    const users = await prisma.user.findMany({
      select: {
        id: true,
        userName: true,
        userEmail: true,
        userCreatedAt: true,
        userUpdatedAt: true,
      },
    });

    return users;
  }
}

export { ListUserService };
