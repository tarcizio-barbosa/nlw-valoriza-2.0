import { Request, Response } from 'express';
import { ListUserReceiverComplimentService } from '../services/ListUserReceiverComplimentService';

class ListUserReceiverComplimentController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { userId } = request;

    const listUserReceiverComplimentService =
      new ListUserReceiverComplimentService();

    const compliments = await listUserReceiverComplimentService.execute(userId);

    return response.json(compliments);
  }
}

export { ListUserReceiverComplimentController };
