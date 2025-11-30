import { MigrationInterface, QueryRunner, getRepository } from 'typeorm';

import { Room } from '../entities/rooms/Room';

export class SeedRooms1590519635405 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const roomRepository = getRepository(Room);

    // Унікальні номери кімнат (глобально унікальні через unique: true)
    const rooms = [
      // Готель 1: Grand Plaza Hotel (luxury)
      {
        room_number: 101,
        price_per_night: '1500',
        capacity: 2,
        comfort_level: 'luxury',
        status: 'available',
        hotel_id: 1,
      },
      {
        room_number: 102,
        price_per_night: '1500',
        capacity: 2,
        comfort_level: 'luxury',
        status: 'occupied',
        hotel_id: 1,
      },
      {
        room_number: 201,
        price_per_night: '1200',
        capacity: 3,
        comfort_level: 'premium',
        status: 'available',
        hotel_id: 1,
      },
      {
        room_number: 202,
        price_per_night: '1200',
        capacity: 3,
        comfort_level: 'premium',
        status: 'maintenance',
        hotel_id: 1,
      },

      // Готель 2: Riverside Boutique (comfort)
      {
        room_number: 103,
        price_per_night: '900',
        capacity: 2,
        comfort_level: 'comfort',
        status: 'available',
        hotel_id: 2,
      },
      {
        room_number: 104,
        price_per_night: '900',
        capacity: 2,
        comfort_level: 'comfort',
        status: 'occupied',
        hotel_id: 2,
      },
      {
        room_number: 203,
        price_per_night: '800',
        capacity: 2,
        comfort_level: 'standard',
        status: 'available',
        hotel_id: 2,
      },

      // Готель 3: Mountain View Lodge
      {
        room_number: 105,
        price_per_night: '700',
        capacity: 2,
        comfort_level: 'standard',
        status: 'available',
        hotel_id: 3,
      },
      {
        room_number: 106,
        price_per_night: '1000',
        capacity: 4,
        comfort_level: 'comfort',
        status: 'occupied',
        hotel_id: 3,
      },
      {
        room_number: 204,
        price_per_night: '1300',
        capacity: 4,
        comfort_level: 'premium',
        status: 'available',
        hotel_id: 3,
      },

      // Готель 4: City Center Inn
      {
        room_number: 107,
        price_per_night: '600',
        capacity: 1,
        comfort_level: 'standard',
        status: 'available',
        hotel_id: 4,
      },
      {
        room_number: 108,
        price_per_night: '600',
        capacity: 1,
        comfort_level: 'standard',
        status: 'maintenance',
        hotel_id: 4,
      },

      // Готель 5: Sunset Beach Resort
      {
        room_number: 109,
        price_per_night: '1100',
        capacity: 2,
        comfort_level: 'premium',
        status: 'available',
        hotel_id: 5,
      },
      {
        room_number: 110,
        price_per_night: '1400',
        capacity: 2,
        comfort_level: 'luxury',
        status: 'occupied',
        hotel_id: 5,
      },
      {
        room_number: 205,
        price_per_night: '1600',
        capacity: 4,
        comfort_level: 'luxury',
        status: 'available',
        hotel_id: 5,
      },
    ];

    for (const roomData of rooms) {
      const room = new Room();
      Object.assign(room, roomData);
      await roomRepository.save(room);
    }

    console.log(`✅ Seeded ${rooms.length} rooms.`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const roomRepository = getRepository(Room);
    await roomRepository.clear();
    console.log('🧹 Cleared all rooms.');
  }
}
