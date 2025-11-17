import { Router } from 'express';

import auth from './auth';
import clients from './clients';
import hotels from './hotels';
import users from './users';

const router = Router();

router.use('/auth', auth);
router.use('/users', users);
router.use('/hotels', hotels);
router.use('/clients', clients);

export default router;
