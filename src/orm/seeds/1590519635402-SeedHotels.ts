import { MigrationInterface, QueryRunner, getRepository } from 'typeorm';

import { Hotel } from '../entities/hotels/Hotel';

export class SeedHotels1590519635402 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const hotelRepository = getRepository(Hotel);

    const hotels = [
      {
        name: 'Grand Plaza Hotel',
        location: 'Kyiv, Khreshchatyk St, 1',
        description: 'Luxury 5-star hotel in the heart of Kyiv with panoramic city views.',
        policy: 'Check-in: 14:00, Check-out: 12:00. Cancellation 24h before arrival.',
        stars: 5,
      },
      {
        name: 'Riverside Boutique',
        location: 'Lviv, Dnistrovska St, 22',
        description: 'Cozy boutique hotel near the old town, perfect for romantic getaways.',
        policy: 'Non-refundable bookings. Pets not allowed.',
        stars: 4,
      },
      {
        name: 'Mountain View Lodge',
        location: 'Yaremche, Carpathian Mountains',
        description: 'Scenic mountain retreat with wooden cabins and spa facilities.',
        policy: 'Minimum 2-night stay on weekends.',
        stars: 3,
      },
      {
        name: 'City Center Inn',
        location: 'Odesa, Deribasivska St, 15',
        description: 'Affordable and clean hotel steps away from the famous Deribasivska street.',
        policy: 'Free cancellation up to 48 hours before check-in.',
        stars: 2,
      },
      {
        name: 'Sunset Beach Resort',
        location: 'Zatoka, Black Sea Coast',
        description: 'Family-friendly beachfront resort with pools and kids’ club.',
        policy: 'All-inclusive packages available. No parties allowed.',
        stars: 4,
      },
    ];

    for (const hotelData of hotels) {
      const hotel = new Hotel();
      Object.assign(hotel, hotelData);
      await hotelRepository.save(hotel);
    }

    console.log(`✅ Seeded ${hotels.length} hotels.`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    // Опціонально: видалити всі готелі
    const hotelRepository = getRepository(Hotel);
    await hotelRepository.clear();
    console.log('🧹 Cleared all hotels.');
  }
}