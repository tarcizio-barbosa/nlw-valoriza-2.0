import { prisma } from './ClientService';

class ListUserReceiverComplimentService {
  async execute(id: string) {
    const compliments = await prisma.compliment.findMany({
      where: {
        userReceiverId: id,
      },
      select: {
        id: true,
        complimentMessage: true,
        complimentCreatedAt: true,
        userSender: {
          select: {
            userName: true,
          },
        },
        tag: {
          select: {
            tagName: true,
          },
        },
      },
    });

    return compliments;
  }
}

export { ListUserReceiverComplimentService };
