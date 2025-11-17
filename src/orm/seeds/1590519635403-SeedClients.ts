import { MigrationInterface, QueryRunner, getRepository } from 'typeorm';

import { Client } from '../entities/clients/Client';

export class SeedClients1590519635403 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const clientRepository = getRepository(Client);

    const clients = [
      {
        first_name: 'Olena',
        middle_name: 'Petrovna',
        last_name: 'Shevchenko',
        phone: '+380501234567',
        email: 'olena.shevchenko@example.com',
        is_registered: true,
      },
      {
        first_name: 'Andriy',
        middle_name: 'Mykhailovych',
        last_name: 'Kovalenko',
        phone: '+380672345678',
        email: 'andriy.kovalenko@example.com',
        is_registered: false,
      },
      {
        first_name: 'Natalia',
        middle_name: 'Serhiivna',
        last_name: 'Bondarenko',
        phone: '+380933456789',
        email: 'natalia.bondarenko@example.com',
        is_registered: true,
      },
      {
        first_name: 'Dmytro',
        middle_name: 'Volodymyrovych',
        last_name: 'Tkachenko',
        phone: '+380504567890',
        email: 'dmytro.tkachenko@example.com',
        is_registered: false,
      },
      {
        first_name: 'Iryna',
        middle_name: 'Oleksandrivna',
        last_name: 'Melnyk',
        phone: '+380675678901',
        email: 'iryna.melnyk@example.com',
        is_registered: true,
      },
      {
        first_name: 'Viktor',
        middle_name: 'Yurievych',
        last_name: 'Sydorenko',
        phone: '+380936789012',
        email: 'viktor.sydorenko@example.com',
        is_registered: false,
      },
      {
        first_name: 'Tetiana',
        middle_name: 'Ivanivna',
        last_name: 'Kovalchuk',
        phone: '+380507890123',
        email: 'tetiana.kovalchuk@example.com',
        is_registered: true,
      },
      {
        first_name: 'Oleksandr',
        middle_name: 'Pavlovych',
        last_name: 'Kravchuk',
        phone: '+380678901234',
        email: 'oleksandr.kravchuk@example.com',
        is_registered: false,
      },
    ];

    for (const clientData of clients) {
      const client = new Client();
      Object.assign(client, clientData);
      await clientRepository.save(client);
    }

    console.log(`✅ Seeded ${clients.length} clients.`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const clientRepository = getRepository(Client);
    await clientRepository.clear();
    console.log('🧹 Cleared all clients.');
  }
}