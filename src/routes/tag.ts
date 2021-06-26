import { Router } from 'express';
import { CreateTagController } from '../controllers/CreateTagController';
import { ensureAdmin } from '../middlewares/ensureAdmin';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';

const routes = Router();

const createTagController = new CreateTagController();

routes.post('/', ensureAuthenticated, ensureAdmin, createTagController.handle);

export default routes;
