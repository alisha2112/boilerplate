import { Router } from 'express';

import { list, show, create, update, destroy } from 'controllers/hotels';
import { checkJwt } from 'middleware/checkJwt';
import { checkRole } from 'middleware/checkRole';
import { validatorCreateHotel } from 'middleware/validation/hotels/validatorCreateHotel';

const router = Router();

router.get('/', [checkJwt, checkRole(['ADMINISTRATOR'])], list);
router.get('/:id([0-9]+)', [checkJwt], show);

router.post('/', [checkJwt, checkRole(['ADMINISTRATOR']), validatorCreateHotel], create);

router.patch('/:id([0-9]+)', [checkJwt, checkRole(['ADMINISTRATOR'])], update);

router.delete('/:id([0-9]+)', [checkJwt, checkRole(['ADMINISTRATOR'])], destroy);

export default router;
