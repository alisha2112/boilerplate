import { Router } from 'express';

import auth from './auth';
import hotels from './hotels';
import users from './users';

const router = Router();

router.use('/auth', auth);
router.use('/users', users);
router.use('/hotels', hotels);

export default router;
