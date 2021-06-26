import { Prisma } from '@prisma/client';
import { prisma } from './ClientService';

const complimentPersonalData = Prisma.validator<Prisma.ComplimentArgs>()({
  select: {
    tagId: true,
    userSenderId: true,
    userReceiverId: true,
    complimentMessage: true,
  },
});

type ComplimentPersonalData = Prisma.ComplimentGetPayload<
  typeof complimentPersonalData
>;

class CreateComplimentService {
  async execute({
    tagId,
    userSenderId,
    userReceiverId,
    complimentMessage,
  }: ComplimentPersonalData) {
    if (userSenderId === userReceiverId) {
      throw new Error('Incorrect User Receiver.');
    }

    const userReceiverExists = await prisma.user.findUnique({
      where: {
        id: userReceiverId,
      },
    });

    if (!userReceiverExists) {
      throw new Error('User receiver does not exists.');
    }

    const compliment = await prisma.compliment.create({
      data: {
        tagId,
        userSenderId,
        userReceiverId,
        complimentMessage,
      },
    });

    return compliment;
  }
}

export { CreateComplimentService };
