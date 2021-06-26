import { Router } from 'express';
import { CreateTagController } from '../controllers/CreateTagController';
import { ListTagController } from '../controllers/ListTagController';
import { ensureAdmin } from '../middlewares/ensureAdmin';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';

const routes = Router();

const createTagController = new CreateTagController();
const listTagController = new ListTagController();

routes.post('/', ensureAuthenticated, ensureAdmin, createTagController.handle);
routes.get('/', ensureAuthenticated, listTagController.handle);

export default routes;
