import { Request, Response, NextFunction } from 'express';
import { getRepository } from 'typeorm';

import { Hotel } from 'orm/entities/hotels/Hotel';
import { CustomError } from 'utils/response/custom-error/CustomError';

export const list = async (req: Request, res: Response, next: NextFunction) => {
  const hotelRepository = getRepository(Hotel);

  try {
    const hotels = await hotelRepository.find({
      relations: ['rooms', 'employees', 'services', 'bookings'],
    });

    res.customSuccess(200, 'Hotels retrieved', hotels);
  } catch (err) {
    const customError = new CustomError(400, 'Raw', 'Error retrieving hotels', null, err);
    return next(customError);
  }
};