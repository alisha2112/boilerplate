import { Request, Response, NextFunction } from 'express';
import { getRepository } from 'typeorm';

import { Client } from 'orm/entities/clients/Client';
import { CustomError } from 'utils/response/custom-error/CustomError';

export const list = async (req: Request, res: Response, next: NextFunction) => {
  const clientRepository = getRepository(Client);

  try {
    const clients = await clientRepository.find({
      relations: ['bookings'], // JOIN з bookings
    });

    res.customSuccess(200, 'Clients retrieved', clients);
  } catch (err) {
    const customError = new CustomError(400, 'Raw', 'Error retrieving clients', null, err);
    return next(customError);
  }
};