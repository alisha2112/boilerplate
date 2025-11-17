import { Request, Response, NextFunction } from 'express';
import { getRepository } from 'typeorm';

import { Client } from 'orm/entities/clients/Client';
import { CustomError } from 'utils/response/custom-error/CustomError';

export const create = async (req: Request, res: Response, next: NextFunction) => {
  const clientRepository = getRepository(Client);
  const clientData = req.body;

  try {
    const client = clientRepository.create(clientData);
    const savedClient = await clientRepository.save(client);

    res.customSuccess(201, 'Client created', savedClient);
  } catch (err) {
    if (err.code === '23505') {
      const customError = new CustomError(409, 'General', 'Client with this phone or email already exists', [
        'Phone and email must be unique.',
      ]);
      return next(customError);
    }
    const customError = new CustomError(400, 'Raw', 'Error creating client', null, err);
    return next(customError);
  }
};