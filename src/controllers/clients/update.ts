import { Request, Response, NextFunction } from 'express';

import { ClientResponseDTO } from '../../dto/ClientResponseDTO';
import { ClientService } from '../../services/ClientService';

export const update = async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;
  const clientService = new ClientService();

  try {
    const updatedClient = await clientService.update(Number(id), req.body);
    res.customSuccess(200, 'Client updated', new ClientResponseDTO(updatedClient));
  } catch (err) {
    return next(err);
  }
};