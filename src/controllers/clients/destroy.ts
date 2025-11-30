import { Request, Response, NextFunction } from 'express';

import { ClientService } from '../../services/ClientService';

export const destroy = async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;
  const clientService = new ClientService();

  try {
    await clientService.delete(Number(id));
    res.customSuccess(200, 'Client deleted');
  } catch (err) {
    return next(err);
  }
};
