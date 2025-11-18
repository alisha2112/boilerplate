import { Request, Response, NextFunction } from 'express';

import { CustomError } from 'utils/response/custom-error/CustomError';

import { HotelResponseDTO } from '../../dto/HotelResponseDTO';
import { HotelService } from '../../services/HotelService';

export const list = async (req: Request, res: Response, next: NextFunction) => {
  const hotelService = new HotelService();
  try {
    const hotels = await hotelService.findAll();
    // Перетворення масиву сутностей на масив DTO
    const hotelsDTO = hotels.map((hotel) => new HotelResponseDTO(hotel));
    res.customSuccess(200, 'Hotels retrieved', hotelsDTO);
  } catch (err) {
    const customError = new CustomError(400, 'Raw', 'Error retrieving hotels', null, err);
    return next(customError);
  }
};