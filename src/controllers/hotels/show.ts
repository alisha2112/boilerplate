import { Request, Response, NextFunction } from 'express';
import { getRepository } from 'typeorm';

import { Hotel } from 'orm/entities/hotels/Hotel';
import { CustomError } from 'utils/response/custom-error/CustomError';

export const show = async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;

  const hotelRepository = getRepository(Hotel);

  try {
    const hotel = await hotelRepository.findOne({
      where: { hotel_id: Number(id) },
      relations: ['rooms', 'employees', 'services', 'bookings'],
    });

    if (!hotel) {
      const customError = new CustomError(404, 'General', `Hotel with id:${id} not found.`, ['Hotel not found.']);
      return next(customError);
    }

    res.customSuccess(200, 'Hotel found', hotel);
  } catch (err) {
    const customError = new CustomError(400, 'Raw', 'Error retrieving hotel', null, err);
    return next(customError);
  }
};