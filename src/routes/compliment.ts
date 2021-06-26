import { Router } from 'express';
import { CreateComplimentController } from '../controllers/CreateComplimentController';
import { ListUserReceiverComplimentController } from '../controllers/ListUserReceiverComplimentController';
import { ListUserSenderComplimentController } from '../controllers/ListUserSenderComplimentController';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';

const routes = Router();

const createComplimentController = new CreateComplimentController();
const listUserSenderComplimentController =
  new ListUserSenderComplimentController();

const listUserReceiverComplimentController =
  new ListUserReceiverComplimentController();

routes.post('/', ensureAuthenticated, createComplimentController.handle);
routes.get(
  '/send',
  ensureAuthenticated,
  listUserSenderComplimentController.handle,
);

routes.get(
  '/receive',
  ensureAuthenticated,
  listUserReceiverComplimentController.handle,
);

export default routes;
