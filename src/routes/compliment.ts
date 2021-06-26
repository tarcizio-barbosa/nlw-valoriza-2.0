import { Router } from 'express';
import { CreateComplimentController } from '../controllers/CreateComplimentController';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';

const routes = Router();

const createComplimentController = new CreateComplimentController();

routes.post('/', ensureAuthenticated, createComplimentController.handle);

export default routes;
