import { prisma } from './ClientService';

class ListTagService {
  async execute() {
    const tags = await prisma.tag.findMany();

    return tags;
  }
}

export { ListTagService };
