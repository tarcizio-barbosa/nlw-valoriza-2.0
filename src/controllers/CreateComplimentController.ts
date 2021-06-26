import { Request, Response } from 'express';
import { CreateComplimentService } from '../services/CreateComplimentService';

class CreateComplimentController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { tagId, userReceiverId, complimentMessage } = request.body;
    const { userId } = request;

    const createComplimentService = new CreateComplimentService();

    const compliment = await createComplimentService.execute({
      tagId,
      userSenderId: userId,
      userReceiverId,
      complimentMessage,
    });

    return response.status(201).json(compliment);
  }
}

export { CreateComplimentController };
