import { Request, Response, NextFunction } from 'express';

import { CustomError } from 'utils/response/custom-error/CustomError';

import { ClientResponseDTO } from '../../dto/ClientResponseDTO';
import { ClientService } from '../../services/ClientService';

export const list = async (req: Request, res: Response, next: NextFunction) => {
  const clientService = new ClientService();
  try {
    const clients = await clientService.findAll();
    const clientsDTO = clients.map((client) => new ClientResponseDTO(client));
    res.customSuccess(200, 'Clients retrieved', clientsDTO);
  } catch (err) {
    const customError = new CustomError(400, 'Raw', 'Error retrieving clients', null, err);
    return next(customError);
  }
};
