import { Request, Response, NextFunction } from 'express';

import { HotelResponseDTO } from '../../dto/HotelResponseDTO';
import { HotelService } from '../../services/HotelService';


export const create = async (req: Request, res: Response, next: NextFunction) => {
  const hotelService = new HotelService();
  try {
    const newHotel = await hotelService.create(req.body);
    res.customSuccess(201, 'Hotel created', new HotelResponseDTO(newHotel));
  } catch (err) {
    return next(err);
  }
};