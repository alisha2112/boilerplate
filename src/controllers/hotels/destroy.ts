import { Request, Response, NextFunction } from 'express';

import { HotelService } from '../../services/HotelService';

export const destroy = async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;
  const hotelService = new HotelService();

  try {
    await hotelService.delete(Number(id));
    res.customSuccess(200, 'Hotel deleted');
  } catch (err) {
    return next(err);
  }
};
