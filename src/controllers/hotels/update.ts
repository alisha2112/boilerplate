import { Request, Response, NextFunction } from 'express';
import { getRepository } from 'typeorm';

import { Hotel } from 'orm/entities/hotels/Hotel';
import { CustomError } from 'utils/response/custom-error/CustomError';

export const update = async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;
  const updateData = req.body;

  const hotelRepository = getRepository(Hotel);

  try {
    const hotel = await hotelRepository.findOne({
      where: { hotel_id: Number(id) },
    });

    if (!hotel) {
      const customError = new CustomError(404, 'General', `Hotel with id:${id} not found.`, ['Hotel not found.']);
      return next(customError);
    }

    Object.assign(hotel, updateData);
    const updatedHotel = await hotelRepository.save(hotel);

    res.customSuccess(200, 'Hotel updated', updatedHotel);
  } catch (err) {
    if (err.code === '23505') {
      const customError = new CustomError(409, 'General', 'Hotel name or location must be unique', [
        'Name and location must be unique.',
      ]);
      return next(customError);
    }
    const customError = new CustomError(400, 'Raw', 'Error updating hotel', null, err);
    return next(customError);
  }
};