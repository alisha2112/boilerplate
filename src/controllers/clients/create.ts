import { Request, Response, NextFunction } from 'express';

import { ClientResponseDTO } from '../../dto/ClientResponseDTO';
import { ClientService } from '../../services/ClientService';

export const create = async (req: Request, res: Response, next: NextFunction) => {
  const clientService = new ClientService();
  try {
    const newClient = await clientService.create(req.body);
    res.customSuccess(201, 'Client created', new ClientResponseDTO(newClient));
  } catch (err) {
    return next(err);
  }
};