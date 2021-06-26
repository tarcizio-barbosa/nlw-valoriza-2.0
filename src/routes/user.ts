import { Router } from 'express';
import { AuthController } from '../controllers/AuthController';
import { CreateUserController } from '../controllers/CreateUserController';
import { ListUserController } from '../controllers/ListUserController';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';

const routes = Router();

const createUserController = new CreateUserController();
const listUserController = new ListUserController();
const authController = new AuthController();

routes.post('/', createUserController.handle);
routes.post('/login', authController.handle);
routes.get('/', ensureAuthenticated, listUserController.handle);

export default routes;
