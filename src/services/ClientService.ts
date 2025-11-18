import { getRepository } from 'typeorm';

import { Client } from '../orm/entities/clients/Client';
import { CustomError } from '../utils/response/custom-error/CustomError';

export class ClientService {
  private clientRepository = getRepository(Client);

  async findAll(): Promise<Client[]> {
    return await this.clientRepository.find({
      relations: ['bookings'],
    });
  }

  async findOne(id: number): Promise<Client> {
    const client = await this.clientRepository.findOne({
      where: { client_id: id },
      relations: ['bookings'],
    });

    if (!client) {
      throw new CustomError(404, 'General', `Client with id:${id} not found.`, ['Client not found.']);
    }
    return client;
  }

  async create(clientData: Partial<Client>): Promise<Client> {
    try {
      const client = this.clientRepository.create(clientData);
      return await this.clientRepository.save(client);
    } catch (err) {
      if (err.code === '23505') {
        throw new CustomError(409, 'General', 'Client with this phone or email already exists', [
          'Phone and email must be unique.',
        ]);
      }
      throw new CustomError(400, 'Raw', 'Error creating client', null, err);
    }
  }

  async update(id: number, updateData: Partial<Client>): Promise<Client> {
    const client = await this.findOne(id); // Reuse findOne logic to check existence

    try {
      Object.assign(client, updateData);
      return await this.clientRepository.save(client);
    } catch (err) {
      if (err.code === '23505') {
        throw new CustomError(409, 'General', 'Client with this phone or email already exists', [
          'Phone and email must be unique.',
        ]);
      }
      throw new CustomError(400, 'Raw', 'Error updating client', null, err);
    }
  }

  async delete(id: number): Promise<void> {
    const client = await this.findOne(id);
    await this.clientRepository.remove(client);
  }
}