import { prisma } from './ClientService';

class CreateTagService {
  async execute(tagName: string) {
    if (!tagName) {
      throw new Error('Incorrect Tag Name.');
    }

    const tagAlreadyExists = await prisma.tag.findUnique({
      where: {
        tagName,
      },
    });

    if (tagAlreadyExists) {
      throw new Error(
        'There is a unique constraint violation. A new Tag cannot be created with the same name.',
      );
    }

    const tag = await prisma.tag.create({
      data: {
        tagName,
      },
    });

    return tag;
  }
}

export { CreateTagService };
