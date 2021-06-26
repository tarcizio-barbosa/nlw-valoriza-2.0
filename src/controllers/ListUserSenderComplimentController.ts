import { Request, Response } from 'express';
import { ListUserSenderComplimentService } from '../services/ListUserSenderComplimentService';

class ListUserSenderComplimentController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { userId } = request;

    const listUserSenderComplimentService =
      new ListUserSenderComplimentService();

    const compliments = await listUserSenderComplimentService.execute(userId);

    return response.json(compliments);
  }
}

export { ListUserSenderComplimentController };
