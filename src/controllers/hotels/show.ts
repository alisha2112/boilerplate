import { Request, Response, NextFunction } from 'express';

import { HotelResponseDTO } from '../../dto/HotelResponseDTO';
import { HotelService } from '../../services/HotelService';

export const show = async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;
  const hotelService = new HotelService();

  try {
    const hotel = await hotelService.findOne(Number(id));
    res.customSuccess(200, 'Hotel found', new HotelResponseDTO(hotel));
  } catch (err) {
    return next(err); // Помилка про "not found" вже оброблена в сервісі
  }
};