import { Request, Response, NextFunction } from 'express';
import { getRepository } from 'typeorm';

import { Hotel } from 'orm/entities/hotels/Hotel';
import { CustomError } from 'utils/response/custom-error/CustomError';

export const create = async (req: Request, res: Response, next: NextFunction) => {
  const hotelRepository = getRepository(Hotel);
  const hotelData = req.body;

  try {
    const hotel = hotelRepository.create(hotelData);
    const savedHotel = await hotelRepository.save(hotel);

    res.customSuccess(201, 'Hotel created', savedHotel);
  } catch (err) {
    if (err.code === '23505') {
      const customError = new CustomError(409, 'General', 'Hotel name or location must be unique', [
        'Name and location must be unique.',
      ]);
      return next(customError);
    }
    const customError = new CustomError(400, 'Raw', 'Error creating hotel', null, err);
    return next(customError);
  }
};