import { Request, Response, NextFunction } from 'express';
import { getRepository } from 'typeorm';

import { Client } from 'orm/entities/clients/Client';
import { CustomError } from 'utils/response/custom-error/CustomError';

export const update = async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;
  const updateData = req.body;

  const clientRepository = getRepository(Client);

  try {
    const client = await clientRepository.findOne({
      where: { client_id: Number(id) },
    });

    if (!client) {
      const customError = new CustomError(404, 'General', `Client with id:${id} not found.`, ['Client not found.']);
      return next(customError);
    }

    Object.assign(client, updateData);
    const updatedClient = await clientRepository.save(client);

    res.customSuccess(200, 'Client updated', updatedClient);
  } catch (err) {
    if (err.code === '23505') {
      const customError = new CustomError(409, 'General', 'Client with this phone or email already exists', [
        'Phone and email must be unique.',
      ]);
      return next(customError);
    }
    const customError = new CustomError(400, 'Raw', 'Error updating client', null, err);
    return next(customError);
  }
};