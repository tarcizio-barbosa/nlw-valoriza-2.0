import { Router } from 'express';
import { CreateTagController } from '../controllers/CreateTagController';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';

const routes = Router();

const createTagController = new CreateTagController();

routes.post('/', ensureAuthenticated, createTagController.handle);

export default routes;
