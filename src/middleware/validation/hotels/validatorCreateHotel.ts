import { Request, Response, NextFunction } from 'express';
import validator from 'validator';

import { CustomError } from '../../../utils/response/custom-error/CustomError';

export const validatorCreateHotel = async (req: Request, res: Response, next: NextFunction) => {
  const { name, location, stars } = req.body;
  const errors: string[] = [];

  if (!name || validator.isEmpty(name)) {
    errors.push('Hotel name is required');
  }

  if (!location || validator.isEmpty(location)) {
    errors.push('Location is required');
  }

  if (stars !== undefined) {
    if (!validator.isInt(String(stars), { min: 1, max: 5 })) {
      errors.push('Stars must be an integer between 1 and 5');
    }
  }

  if (errors.length > 0) {
    const customError = new CustomError(400, 'Validation', 'Insert validation failed', errors);
    return next(customError);
  }

  return next();
};
