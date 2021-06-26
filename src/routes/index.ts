import { Router } from 'express';
import user from './user';
import tag from './tag';
import compliment from './compliment';

const router = Router();

router.use('/users', user);
router.use('/tags', tag);
router.use('/compliments', compliment);

export default router;
