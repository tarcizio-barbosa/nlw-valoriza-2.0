import { Request, Response } from 'express';
import { CreateTagService } from '../services/CreateTagService';

class CreateTagController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { tagName } = request.body;

    const createTagService = new CreateTagService();

    const tag = await createTagService.execute(tagName);

    return response.status(201).json(tag);
  }
}

export { CreateTagController };
