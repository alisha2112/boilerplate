import { Request, Response, NextFunction } from 'express';

import { ClientResponseDTO } from '../../dto/ClientResponseDTO';
import { ClientService } from '../../services/ClientService';

export const show = async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;
  const clientService = new ClientService();

  try {
    const client = await clientService.findOne(Number(id));
    res.customSuccess(200, 'Client found', new ClientResponseDTO(client));
  } catch (err) {
    return next(err);
  }
};
