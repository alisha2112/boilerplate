import { MigrationInterface, QueryRunner, getRepository } from 'typeorm';

import { Booking } from '../entities/bookings/Booking';

export class SeedBookings1590519635406 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const bookingRepository = getRepository(Booking);

    const bookings = [
      {
        check_in: new Date('2025-12-01'),
        check_out: new Date('2025-12-05'),
        guests_count: 2,
        payment_method: 'credit-card',
        status: 'confirmed',
        cancel_reason: null,
        hotel_id: 1,
        client_id: 1,
        room_id: 1,
      },
      {
        check_in: new Date('2025-11-20'),
        check_out: new Date('2025-11-22'),
        guests_count: 1,
        payment_method: 'online',
        status: 'cancelled',
        cancel_reason: 'Changed travel plans',
        hotel_id: 1,
        client_id: 2,
        room_id: 2,
      },
      {
        check_in: new Date('2025-12-10'),
        check_out: new Date('2025-12-13'),
        guests_count: 2,
        payment_method: 'cash',
        status: 'confirmed',
        cancel_reason: null,
        hotel_id: 2,
        client_id: 3,
        room_id: 5,
      },
      {
        check_in: new Date('2025-12-15'),
        check_out: new Date('2025-12-18'),
        guests_count: 4,
        payment_method: 'online',
        status: 'confirmed',
        cancel_reason: null,
        hotel_id: 3,
        client_id: 4,
        room_id: 8,
      },
      {
        check_in: new Date('2025-11-25'),
        check_out: new Date('2025-11-27'),
        guests_count: 2,
        payment_method: 'credit-card',
        status: 'cancelled',
        cancel_reason: 'Family emergency',
        hotel_id: 5,
        client_id: 5,
        room_id: 10,
      },
      {
        check_in: new Date('2025-12-20'),
        check_out: new Date('2025-12-22'),
        guests_count: 2,
        payment_method: 'online',
        status: 'confirmed',
        cancel_reason: null,
        hotel_id: 2,
        client_id: 6,
        room_id: 7,
      },
      {
        check_in: new Date('2026-01-05'),
        check_out: new Date('2026-01-06'),
        guests_count: 1,
        payment_method: 'cash',
        status: 'confirmed',
        cancel_reason: null,
        hotel_id: 4,
        client_id: 7,
        room_id: 11,
      },
      {
        check_in: new Date('2026-01-10'),
        check_out: new Date('2026-01-15'),
        guests_count: 4,
        payment_method: 'credit-card',
        status: 'confirmed',
        cancel_reason: null,
        hotel_id: 5,
        client_id: 8,
        room_id: 15,
      },
    ];

    for (const bookingData of bookings) {
      const booking = new Booking();
      Object.assign(booking, bookingData);
      await bookingRepository.save(booking);
    }

    console.log(`✅ Seeded ${bookings.length} bookings.`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const bookingRepository = getRepository(Booking);
    await bookingRepository.clear();
    console.log('🧹 Cleared all bookings.');
  }
}
