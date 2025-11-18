import { Request, Response, NextFunction } from 'express';

import { HotelResponseDTO } from '../../dto/HotelResponseDTO';
import { HotelService } from '../../services/HotelService';

export const update = async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;
  const hotelService = new HotelService();

  try {
    const updatedHotel = await hotelService.update(Number(id), req.body);
    res.customSuccess(200, 'Hotel updated', new HotelResponseDTO(updatedHotel));
  } catch (err) {
    return next(err);
  }
};