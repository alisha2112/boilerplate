import { Request, Response, NextFunction } from 'express';
import validator from 'validator';

import { CustomError } from '../../../utils/response/custom-error/CustomError';

export const validatorCreateClient = async (req: Request, res: Response, next: NextFunction) => {
  const { first_name, last_name, phone, email } = req.body;
  const errors: string[] = [];

  if (!first_name || validator.isEmpty(first_name)) {
    errors.push('First name is required');
  }

  if (!last_name || validator.isEmpty(last_name)) {
    errors.push('Last name is required');
  }

  if (!email || !validator.isEmail(email)) {
    errors.push('Valid email is required');
  }

  if (!phone || validator.isEmpty(phone)) {
    errors.push('Phone is required');
  }

  if (errors.length > 0) {
    const customError = new CustomError(400, 'Validation', 'Insert validation failed', errors);
    return next(customError);
  }

  return next();
};