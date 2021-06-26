import { Router } from 'express';
import user from './user';
import tag from './tag';

const router = Router();

router.use('/users', user);
router.use('/tags', tag);

export default router;
