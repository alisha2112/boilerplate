import { Request, Response, NextFunction } from 'express';
import { getRepository } from 'typeorm';

import { Client } from 'orm/entities/clients/Client';
import { CustomError } from 'utils/response/custom-error/CustomError';

export const destroy = async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;

  const clientRepository = getRepository(Client);

  try {
    const client = await clientRepository.findOne({
      where: { client_id: Number(id) },
    });

    if (!client) {
      const customError = new CustomError(404, 'General', `Client with id:${id} not found.`, ['Client not found.']);
      return next(customError);
    }

    await clientRepository.remove(client);
    res.customSuccess(200, 'Client deleted');
  } catch (err) {
    const customError = new CustomError(400, 'Raw', 'Error deleting client', null, err);
    return next(customError);
  }
};